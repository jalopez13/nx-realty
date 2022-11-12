// If you need plugins and global configuration add configuration here.

module.exports = {
  presets: [require("./theme/preset.js")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@headlessui/tailwindcss"),
    // require("@tailwindcss/container-queries"),
  ],
};
