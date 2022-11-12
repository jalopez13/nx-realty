const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const { join } = require("path");

module.exports = {
  presets: [
    require("../../tailwind-workspace-preset.js"),
    require("../../theme/realtymyway.js"),
  ],
  content: [
    join(
      __dirname,
      "{src,pages,app,components}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: "class", // or 'media' or 'class'
};
