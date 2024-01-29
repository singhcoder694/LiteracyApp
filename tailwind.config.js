/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 10.7px 3px rgba(0, 0, 0, 0.25) inset',
      },
      fontFamily:{
        'custom': 'Inter',
      }
    },
  },
  plugins: [],
}