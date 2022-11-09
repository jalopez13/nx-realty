const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  presets: [require('./preset.js')],
  theme: {
    ...defaultTheme.colors,
    extend: {
      fontFamily: {
        // add custom fonts
      },
      colors: {
        // blue
        brand: {
          dark: '#64829B',
          DEFAULT: '#A0C4DC',
          light: '#ffffff',
        },
      },
      // minWidth: {
      //   36: '2.25rem',
      // },
      // transitionTimingFunction: {
      //   'in-expo': 'cubic-bezier(0, 1, 0, 1)',
      //   'out-expo': 'cubic-bezier(1, 0, 1, 0)',
      // },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
