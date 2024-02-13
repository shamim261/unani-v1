/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
            fontFamily: {
                poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
                rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#047941',
                customBlack: '#242A2E',
            },
        },
  },
  plugins: [],
};

