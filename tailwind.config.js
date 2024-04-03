/** @type {import("tailwindcss").Config} */
const {colors, fonts} = require('./src/styles/theme');

module.exports = {
    content: [
        './src/components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}'],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors,
            fontFamily: fonts
        },
    },
    plugins: [],
};
