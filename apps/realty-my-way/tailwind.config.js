const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '900px',
      lg: '1024px',
      xl: '1260px',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        proxima: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        proximabold: ['Proxima Nova Bold', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Red and black
        // brand: {
        //   dark: '#97010E',
        //   DEFAULT: '#1f2937',
        //   light: '#ffffff',
        // },
        // teal and yellow
        // brand: {
        //   dark: '#003b49',
        //   DEFAULT: '#ffc845',
        //   light: '#ffffff',
        // },
        // plum and yellow
        // brand: {
        //   dark: '#41314c',
        //   DEFAULT: '#ffc845',
        //   light: '#ffffff',
        // },
        // green
        // brand: {
        //   dark: '#344C11',
        //   DEFAULT: '#AEC670',
        //   light: '#ffffff',
        // },
        // blue
        // brand: {
        //   dark: '#64829B',
        //   DEFAULT: '#A0C4DC',
        //   light: '#ffffff',
        // },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
