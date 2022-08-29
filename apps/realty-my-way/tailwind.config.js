const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
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
    extend: {
      colors: {
        brand: {
          light: '#fff',
          DEFAULT: '#fff',
          dark: '#000',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
