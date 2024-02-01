/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 0px 0px #D6A83C',
      },
      colors: {
        'smallest-ques-button-clr': '#FFC847',
        'smallest-ques-gradient-start': '#FFB507',
        'smallest-ques-gradient-end': '#FFE99E',
      },
      backgroundImage: theme => ({
        'smallest-ques-gradient': 'linear-gradient(180deg, ' + theme('colors.smallest-ques-gradient-start') + ' 0%, ' + theme('colors.smallest-ques-gradient-end') + ' 99.4%)',
      }),
    },
  },
  plugins: [],
}