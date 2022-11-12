const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      sm: "900px",
      md: "1024px",
      lg: "1200px",
      xl: "1260px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        "app-primary": "var(--app-primary)",
        "app-secondary": "var(--app-secondary)",
        "app-text": "var(--app-text)",
        "app-accent": "var(--app-accent)",
        "app-accent-secondary": "var(--app-accent-secondary)",
        "app-background": "var(--app-background)",
        "app-heading": "var(--app-heading)",
        "app-link": "var(--app-link)",
        "app-white": "var(--app-white)",
        "app-black": "var(--app-black)",
        "app-font-stack": "var(--app-font-stack)",
      },
    },
  },
};
