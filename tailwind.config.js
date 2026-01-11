/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#243040', // nayaysetu (brand)
          hover: '#1a222e',
        },
        accent: {
          DEFAULT: '#D4B982', // nayaysetu-gold
          hover: '#c4a76d',
        },
        bg: {
          default: '#FFFFFF',
          muted: '#F9FAFB', // gray-50
          dark: '#111827', // gray-900
        },
        text: {
          default: '#1F2937', // gray-800
          muted: '#4B5563', // gray-600
          inverted: '#FFFFFF',
        },
        // Backwards compatibility (optional, can be deprecated later)
        'nayaysetu': {
          DEFAULT: '#243040',
          gold: '#D4B982',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2' }], // 48px
        'h2': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'h3': ['1.5rem', { lineHeight: '1.4' }], // 24px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'small': ['0.875rem', { lineHeight: '1.5' }], // 14px
      },
      borderRadius: {
        'sm': '0.375rem', // 6px
        'md': '0.5rem', // 8px
        'lg': '0.75rem', // 12px
      },
      spacing: {
        'section-y': '6rem', // 96px (standard section padding)
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
};