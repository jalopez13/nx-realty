import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { SchemaLink } from '@apollo/client/link/schema';
import merge from 'deepmerge';
import { useMemo } from 'react';
import { schema } from './schema';

let apolloClient;

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    return new SchemaLink({ schema });
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });
  }
}

const cache = new InMemoryCache({
  typePolicies: {
    Properties: {
      keyFields: ['props', ['zpid']],
    },
    Property: {
      keyFields: ['property', ['zpid']],
    },
  },
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache,
    connectToDevTools: true,
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
