import { ApolloProvider } from '@apollo/client';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { useApollo } from '../graphql/apollo-client';
import './globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
