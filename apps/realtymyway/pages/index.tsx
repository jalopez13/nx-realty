import { useQuery } from '@apollo/client';
import { BaseLayout } from '@nx-realty/shared/ui';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { addApolloState, initializeApollo } from '../graphql/apollo-client';
import { PropertiesDocument } from '../graphql/generated';
import type { NextPageWithLayout } from './_app';

const PROPERTIES_QUERY = PropertiesDocument;

const HomePage: NextPageWithLayout = () => {
  const { data, loading, error } = useQuery(PROPERTIES_QUERY, {
    variables: {
      params: {
        location: 'los angeles, ca',
        home_type: 'Houses',
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>ERROR: {error.message}</div>;

  return (
    <>
      <h1>Hello</h1>
      {JSON.stringify(data)}
      <div>
        <Link href={'/ssr'}>SSR</Link> <br />
        <Link href={'/csr'}>CSR</Link> <br />
        <Link href={'/ssg'}>SSG</Link>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export async function getStaticProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  console.log();

  await apolloClient.query({
    query: PROPERTIES_QUERY,
    variables: {
      params: {
        location: 'los angeles, ca',
        home_type: 'Houses',
      },
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default HomePage;
