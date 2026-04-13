import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fluent: {
          // Primary - Deep Navy (CSS 변수 기반, 테마 자동 전환)
          navy: {
            50: '#E8ECF1',
            100: '#C5CCD9',
            200: '#9EAAC1',
            300: '#7688A9',
            400: '#4E6691',
            500: '#2D4A73',
            600: 'rgb(var(--c-surface-str) / <alpha-value>)',
            700: 'rgb(var(--c-surface) / <alpha-value>)',
            800: 'rgb(var(--c-surface-deep) / <alpha-value>)',
            900: '#0A1018',
          },
          // Accent - Muted Teal
          teal: {
            50: '#E6F4F6',
            100: '#C0E3E8',
            200: '#96D1D9',
            300: '#6CBFCA',
            400: '#4A9BA5',
            500: '#3D8A93',
            600: '#2F7A82',
            700: '#236A71',
            800: '#1A5258',
            900: '#103A3F',
          },
          // Backgrounds (CSS 변수 기반)
          bg: {
            dark: 'rgb(var(--c-bg) / <alpha-value>)',
            'dark-card': 'rgb(var(--c-card) / <alpha-value>)',
            'dark-elevated': 'rgb(var(--c-elevated) / <alpha-value>)',
            light: '#F8F9FB',
            'light-card': '#FFFFFF',
          },
          // Text (CSS 변수 기반)
          text: {
            primary: 'rgb(var(--c-text) / <alpha-value>)',
            secondary: 'rgb(var(--c-text-sec) / <alpha-value>)',
            muted: 'rgb(var(--c-text-mut) / <alpha-value>)',
            dark: '#1A1F2E',
            'dark-secondary': '#4E5D6E',
          },
          // Semantic
          success: '#4CAF7D',
          error: '#E57373',
          warning: '#FFB74D',
          xp: '#D4A853',
        },
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-sm': 'bounceSm 0.4s ease-out',
        'shake': 'shake 0.4s ease-out',
        'float-up': 'floatUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-40px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
