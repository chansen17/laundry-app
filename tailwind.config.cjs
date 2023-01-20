/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        bouncing: {
          '0%': { transform: 'translateY(0px)'},
          '50%': { transform: 'translateY(2px)'},
          '100%': { transform: 'translateY(0px)'},
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bouncin': 'bouncing 2s linear infinite',
      },
    },
  },
  plugins: [],
}