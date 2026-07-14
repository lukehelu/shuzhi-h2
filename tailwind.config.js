/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        h2: {
          50:  '#e6f7ff',
          100: '#b3e7ff',
          200: '#80d7ff',
          300: '#4dc7ff',
          400: '#1ab7ff',
          500: '#0096d6',
          600: '#0075ab',
          700: '#005580',
          800: '#003455',
          900: '#00142b',
        },
        h2gold: {
          400: '#f0c040',
          500: '#d4a843',
        }
      },
      fontFamily: {
        'noto': ['"Noto Sans SC"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #00142b 0%, #003455 50%, #005580 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(0,150,214,0.08) 0%, rgba(0,150,214,0) 100%)',
      }
    }
  },
  plugins: []
}
