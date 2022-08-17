// const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

module.exports = {
  presets: [require('../../../tailwind-workspace-preset.js')],
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
};
