/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    screens: {
      'sm' :'600px',
      'tablet': '900px',
      'xl': {'max': '1200px'},
    },
    extend: {
      colors: {
        tindogPink: '#ff4c68',
      }
    },
  },
  plugins: [],
}

