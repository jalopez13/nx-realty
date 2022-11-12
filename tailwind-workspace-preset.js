// If you need plugins and global configuration add configuration here.

module.exports = {
  presets: [require("./theme/preset.js")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
