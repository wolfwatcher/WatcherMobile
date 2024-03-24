/** @type {import("tailwindcss").Config} */
const {colors, fonts} = require('./src/styles/theme');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
