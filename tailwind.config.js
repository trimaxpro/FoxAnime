/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: {
          DEFAULT: '#0a0a0a',
          card: '#0a0a0a',
          hover: '#141414',
          border: '#262626',
        },
        brand: {
          red: '#E50914',
          glow: 'rgba(229, 9, 20, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        nunito: ['"Nunito Sans"', '"Nunito"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rainbow': 'rainbow 3s linear infinite',
      },
      keyframes: {
        rainbow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
