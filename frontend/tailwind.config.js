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
        '10vw': '10vw',
      
      },
      margin: {
        '40%': '40%',
        '15vh':'15vh',
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
        'custom': '0px 4px 0px 0px #D6A83C',
      },
      gradients: {
        'custom-gradient-purple': 'linear-gradient(180deg, #6153CC 0%, #D0C6FF 100%)',
      },
      gap: {
        '15vh': '15vh',
        '5vh' : '5vh',
      },
      colors: {
        'smallest-ques-button-clr': '#FFC847',
        'smallest-ques-gradient-start': '#FFB507',
        'smallest-ques-gradient-end': '#FFE99E',
        'question1': 'var(--Yellow-grad-up, #FFB507)',
        'question2': "#A5D720",
        'question3' : "#FF6969",
        'question4' : "#62D0FF",
      },
      backgroundImage: theme => ({
        'smallest-ques-gradient': 'linear-gradient(180deg, ' + theme('colors.smallest-ques-gradient-start') + ' 0%, ' + theme('colors.smallest-ques-gradient-end') + ' 99.4%)',
      }),
    },
  },
  plugins: [],
}