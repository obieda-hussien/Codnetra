/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== أبقِ على الخطوط والألوان الأساسية كما هي =====
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        // Primary background colors (keeping existing)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0', 
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        dark: {
          background: '#0a0a0f',
          surface: '#16213e', 
          text: '#e5e7eb',
          secondary: '#94a3b8',
        },
        // ===== أضف ألوان الـ Card والـ Gradient الجديدة =====
        card: {
          primary: 'rgba(29, 41, 59, 0.7)', // تعديل بسيط ليتناسب مع الثيم
          border: 'rgba(59, 130, 246, 0.3)', // استخدام لون primary كحدود
        },
        gradient: { // ألوان متدرجة جديدة لاستخدامها في الخلفية
          start: '#2563eb', // primary
          end: '#10b981',   // accent
        },
        // Keep existing for compatibility
        background: {
          DEFAULT: '#0a0a0f',
          surface: '#16213e',
        },
        text: {
          primary: '#e5e7eb',
          secondary: '#94a3b8',
          accent: '#00ff88',
        },
      },
      // ===== أضف الـ backgroundImage والـ Animations الجديدة =====
      backgroundImage: {
        'animated-gradient': 'linear-gradient(-45deg, #2563eb, #1e3a8a, #059669, #10b981)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'float': 'float 4s ease-in-out infinite',
        // --- جديد ---
        'gradient-shift': 'gradientShift 15s ease infinite', // أبطأ وأكثر سلاسة
        'pulse-neon': 'pulseNeon 1.5s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        // أبقِ على الـ Keyframes القديمة
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 4px #10b981, 0 0 8px #10b981' },
          '100%': { boxShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // --- جديد ---
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseNeon: {
          '0%': { boxShadow: '0 0 4px #00ff88, 0 0 8px #00ff88' },
          '100%': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}