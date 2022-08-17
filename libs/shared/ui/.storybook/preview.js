import './tailwind-imports.css';

// viewports

const BREAKPOINTS_INIT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INIT).map(([key, value], idx) => [
    key,
    {
      name: key,
      styles: {
        width: `${value}px`,
        height: `90vh`,
      },
    },
  ])
);

export const decorators = [];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
      time: /Time$/,
      year: /Year$/i,
      month: /Month$/i,
      day: /Day$/i,
      hour: /Hour$/i,
      minute: /Minute$/i,
      second: /Second$/i,
      millisecond: /Second$/i,
    },
  },
  viewport: { viewports: customViewports },
};
