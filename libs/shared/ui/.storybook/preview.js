import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import './tailwind-imports.css';

// Viewports

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

// Parameters

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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

// Fix: NextImage

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
