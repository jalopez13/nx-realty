const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [require('./preset.js')],
  theme: {
    ...defaultTheme.colors,
    extend: {},
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
