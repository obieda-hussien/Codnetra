// Security configuration and utilities
export const securityConfig = {
  // Rate limiting configuration
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    skipSuccessfulRequests: false, // Don't count successful requests
    skipFailedRequests: false, // Don't count failed requests
  },
  
  // Contact form rate limiting (more restrictive)
  contactFormRateLimit: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 contact form submissions per hour
  },
  
  // Content Security Policy
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'", // Required for some frameworks
      "'unsafe-eval'", // Required for some development tools
      "https://cdnjs.cloudflare.com",
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com"
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'", // Required for CSS-in-JS libraries
      "https://fonts.googleapis.com"
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com"
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https:",
      "blob:"
    ],
    connectSrc: [
      "'self'",
      "https://api.github.com",
      "https://www.google-analytics.com"
    ],
    frameSrc: [
      "'self'",
      "https://www.youtube.com",
      "https://player.vimeo.com"
    ],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    manifestSrc: ["'self'"],
    workerSrc: ["'self'"],
    childSrc: ["'self'"],
    formAction: ["'self'"],
    frameAncestors: ["'self'"],
    baseUri: ["'self'"],
    upgradeInsecureRequests: true
  },

  // Input validation patterns
  validation: {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    phone: /^[+]?[1-9][\d]{7,15}$/,
    arabicText: /^[\u0600-\u06FFa-zA-Z0-9\s\-_.,!?]+$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    ipAddress: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    
    // Security patterns to block
    sqlInjection: /(union|select|insert|delete|drop|create|alter|exec|execute|script|javascript|onload|onerror)/i,
    xssAttempt: /(<script|<iframe|<object|<embed|javascript:|data:text\/html)/i,
    pathTraversal: /(\.\.|\/etc\/|\/bin\/|\/usr\/|\/var\/|\/tmp\/)/i,
    commandInjection: /(;|\||&|`|\$\(|\${)/,
  },

  // File upload security
  fileUpload: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain'
    ],
    allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.pdf', '.txt'],
    scanForMalware: true
  },

  // Session security
  session: {
    name: 'codenetra_session',
    secret: process.env.SESSION_SECRET || 'fallback-secret-key-change-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      httpOnly: true, // Prevent XSS attacks
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'strict' // CSRF protection
    }
  },

  // CORS configuration
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://obieda-hussien.github.io', 'https://codenetra.com']
      : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    maxAge: 86400 // 24 hours
  }
}

// Input sanitization functions
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/data:text\/html/gi, '') // Remove data URLs
    .replace(/vbscript:/gi, '') // Remove vbscript
    .replace(/expression\s*\(/gi, '') // Remove CSS expressions
    .trim()
}

export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*\/?>/gi, '')
    .replace(/<link\b[^<]*\/?>/gi, '')
    .replace(/<meta\b[^<]*\/?>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove event handlers
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
}

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string, 
  limit: number = 10, 
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)
  
  if (!record || now > record.resetTime) {
    const resetTime = now + windowMs
    rateLimitStore.set(identifier, { count: 1, resetTime })
    return { allowed: true, remaining: limit - 1, resetTime }
  }
  
  if (record.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime }
  }
  
  record.count++
  return { allowed: true, remaining: limit - record.count, resetTime: record.resetTime }
}

// Security validation functions
export function isValidEmail(email: string): boolean {
  return securityConfig.validation.email.test(email) && email.length <= 254
}

export function isValidPhone(phone: string): boolean {
  return securityConfig.validation.phone.test(phone) && phone.length <= 20
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return securityConfig.validation.url.test(url)
  } catch {
    return false
  }
}

export function containsSqlInjection(input: string): boolean {
  return securityConfig.validation.sqlInjection.test(input)
}

export function containsXssAttempt(input: string): boolean {
  return securityConfig.validation.xssAttempt.test(input)
}

export function containsPathTraversal(input: string): boolean {
  return securityConfig.validation.pathTraversal.test(input)
}

export function containsCommandInjection(input: string): boolean {
  return securityConfig.validation.commandInjection.test(input)
}

// Comprehensive input validation
export function validateInput(input: string, type: 'text' | 'email' | 'phone' | 'url' = 'text'): {
  valid: boolean
  sanitized: string
  errors: string[]
} {
  const errors: string[] = []
  const sanitized = sanitizeInput(input)
  
  // Check for security threats
  if (containsSqlInjection(input)) {
    errors.push('Input contains potentially malicious SQL patterns')
  }
  
  if (containsXssAttempt(input)) {
    errors.push('Input contains potentially malicious script patterns')
  }
  
  if (containsPathTraversal(input)) {
    errors.push('Input contains potentially malicious path patterns')
  }
  
  if (containsCommandInjection(input)) {
    errors.push('Input contains potentially malicious command patterns')
  }
  
  // Type-specific validation
  switch (type) {
    case 'email':
      if (!isValidEmail(sanitized)) {
        errors.push('Invalid email format')
      }
      break
    case 'phone':
      if (!isValidPhone(sanitized)) {
        errors.push('Invalid phone number format')
      }
      break
    case 'url':
      if (!isValidUrl(sanitized)) {
        errors.push('Invalid URL format')
      }
      break
  }
  
  return {
    valid: errors.length === 0,
    sanitized,
    errors
  }
}

// IP address utilities
export function getClientIp(request: Request): string {
  // In production, you might need to handle proxy headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIp) {
    return realIp
  }
  
  // Fallback - not reliable in production behind proxies
  return 'unknown'
}

// Generate CSP nonce for inline scripts (if needed)
export function generateNonce(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    return btoa(String.fromCharCode(...array))
  }
  // Fallback for Node.js environment
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const crypto = require('crypto')
    return crypto.randomBytes(16).toString('base64')
  } catch {
    // Final fallback if crypto is not available
    return Math.random().toString(36).substring(2, 15)
  }
}

// CSRF token generation and validation
export function generateCsrfToken(): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(32)
    window.crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
  // Fallback for Node.js environment
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const crypto = require('crypto')
    return crypto.randomBytes(32).toString('hex')
  } catch {
    // Final fallback if crypto is not available
    return Math.random().toString(36).repeat(4).substring(0, 64)
  }
}

export function validateCsrfToken(token: string, sessionToken: string): boolean {
  return token === sessionToken && token.length === 64
}