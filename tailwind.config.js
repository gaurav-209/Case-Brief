/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#C0CFDE',
          200: '#96ADC8',
          300: '#6B8CB2',
          400: '#4C74A1',
          500: '#2C5282',
          600: '#1A365D', // Navy blue (main)
          700: '#15294D',
          800: '#101D3A',
          900: '#0A1428',
        },
        secondary: {
          50: '#FCF7E6',
          100: '#F8EDBE',
          200: '#F4E293',
          300: '#EFD668',
          400: '#EBCB3F',
          500: '#D4B52C',
          600: '#BF9B30', // Gold (main)
          700: '#A98429',
          800: '#8C6D22',
          900: '#6F551B',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

