/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dark-gold': '#69483c',
        'light-gold':'#eaba6f',
        'med-gold':'#ce9b4b',
      },
    },
    fontFamily:{
      'sans': ['Raleway']
    },
  },
  plugins: [],
}
