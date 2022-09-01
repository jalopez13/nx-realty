import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import './globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default App;
