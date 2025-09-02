import { z } from 'zod'

// Form validation schemas
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'الاسم يجب أن يكون على الأقل حرفين')
    .max(50, 'الاسم يجب أن يكون أقل من 50 حرف')
    .regex(/^[\u0600-\u06FFa-zA-Z\s]+$/, 'الاسم يجب أن يحتوي على أحرف عربية أو إنجليزية فقط'),
  
  email: z.string()
    .email('البريد الإلكتروني غير صحيح')
    .min(5, 'البريد الإلكتروني قصير جداً')
    .max(100, 'البريد الإلكتروني طويل جداً'),
  
  phone: z.string()
    .regex(/^[+]?[1-9][\d]{7,15}$/, 'رقم الهاتف غير صحيح')
    .optional(),
  
  subject: z.string()
    .min(5, 'الموضوع يجب أن يكون على الأقل 5 أحرف')
    .max(100, 'الموضوع يجب أن يكون أقل من 100 حرف'),
  
  message: z.string()
    .min(10, 'الرسالة يجب أن تكون على الأقل 10 أحرف')
    .max(1000, 'الرسالة يجب أن تكون أقل من 1000 حرف'),
})

export const subscriptionSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
})

export const projectRequestSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  company: z.string().optional(),
  projectType: z.enum(['web', 'mobile', 'desktop', 'other']).refine(
    (val) => ['web', 'mobile', 'desktop', 'other'].includes(val),
    { message: 'نوع المشروع مطلوب' }
  ),
  budget: z.enum(['small', 'medium', 'large', 'enterprise']).refine(
    (val) => ['small', 'medium', 'large', 'enterprise'].includes(val),
    { message: 'الميزانية مطلوبة' }
  ),
  timeline: z.enum(['urgent', 'normal', 'flexible']).refine(
    (val) => ['urgent', 'normal', 'flexible'].includes(val),
    { message: 'الجدول الزمني مطلوب' }
  ),
  description: z.string().min(20, 'وصف المشروع يجب أن يكون مفصلاً أكثر'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type SubscriptionData = z.infer<typeof subscriptionSchema>
export type ProjectRequestData = z.infer<typeof projectRequestSchema>

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(identifier: string, limit: number = 10, windowMs: number = 15 * 60 * 1000): boolean {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= limit) {
    return false
  }
  
  record.count++
  return true
}

// Validation helpers
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  return /^[+]?[1-9][\d]{7,15}$/.test(phone)
}

export function validateArabicText(text: string): boolean {
  return /^[\u0600-\u06FFa-zA-Z0-9\s\-_.,!?]+$/.test(text)
}

// Form field validation errors in Arabic
export const validationMessages = {
  required: 'هذا الحقل مطلوب',
  email: 'البريد الإلكتروني غير صحيح',
  phone: 'رقم الهاتف غير صحيح',
  minLength: (min: number) => `يجب أن يكون على الأقل ${min} أحرف`,
  maxLength: (max: number) => `يجب أن يكون أقل من ${max} حرف`,
  invalidCharacters: 'يحتوي على أحرف غير مسموحة',
  tooShort: 'قصير جداً',
  tooLong: 'طويل جداً',
  invalidFormat: 'تنسيق غير صحيح',
}