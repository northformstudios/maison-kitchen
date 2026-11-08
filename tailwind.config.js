/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F7',
        white: '#FFFFFF',
        main: '#171717',
        secondary: '#777777',
        accent: {
          DEFAULT: '#B99A75',
          dark: '#967857',
          light: '#D4C1A5',
          ultralight: '#F7F3EC'
        },
        cream: {
          DEFAULT: '#F1EBDD',
          light: '#FBF9F5',
          dark: '#E2DAC8'
        },
        surface: '#FFFFFF',
        border: 'rgba(0, 0, 0, 0.08)',
        'border-light': 'rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.03em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 10px 30px rgba(0, 0, 0, 0.04)',
        'luxury': '0 20px 40px -15px rgba(23, 23, 23, 0.07), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'luxury-hover': '0 30px 60px -20px rgba(23, 23, 23, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
