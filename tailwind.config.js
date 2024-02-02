/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '450': '450px',
        '22vw': '22vw',
      },
      margin: {
        '40%': '40%',
      },
      colors: {
        'custom-grey': '#F5F5F5',
        'custom-purple' : '#6153CC',
        'custom-red': '#FF0033',
        'custom-yellow' : '#FFB507'
      },
      fontFamily: {
        'sf-pro-rounded': ['SFProRounded', 'sans-serif'],
      },

      boxShadow: {
        'custom': '0px 0px 10.7px 3px rgba(0, 0, 0, 0.25) inset',
      },
      gradients: {
        'custom-gradient-purple': 'linear-gradient(180deg, #6153CC 0%, #D0C6FF 100%)',
      },
    },
  },
  plugins: [],
}