const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');

module.exports = {
  presets: [
    require('../../tailwind-workspace-preset.js'),
    require('../../theme/realty-my-way.js'),
  ],
  content: [
    join(process.cwd(), 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // or 'media' or 'class'
};
