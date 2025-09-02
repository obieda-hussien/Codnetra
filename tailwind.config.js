/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // No darkMode: 'class' anymore - dark mode is the default
  theme: {
    extend: {
      colors: {
        // Primary background colors
        background: {
          DEFAULT: '#0a0a0f', // Deep cosmic black
          surface: '#16213e', // Night blue for secondary surfaces
        },
        // Gradient colors for backgrounds and accent elements
        gradient: {
          start: '#667eea', // Purple
          mid: '#764ba2',   // Violet
          end: '#00d4ff',   // Cyan
          accent: '#00ff88', // Neon green
        },
        // Text colors for readability
        text: {
          primary: '#e5e7eb',   // Off-white (easy on eyes)
          secondary: '#94a3b8', // Gray for menus and subtitles
          accent: '#00ff88',    // Neon green for important text
        },
        // Card colors with transparency to show animated background
        card: {
          background: 'rgba(22, 33, 62, 0.7)', // Semi-transparent glass
          border: 'rgba(102, 126, 234, 0.3)', // Subtle glowing borders
        },
      },
      // New animation effects
      animation: {
        'gradient-shift': 'gradientShift 10s ease infinite', // Slower, smoother movement
        'pulse-neon': 'pulseNeon 1.5s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseNeon: { // More vibrant glow effect
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
  plugins: [],
}