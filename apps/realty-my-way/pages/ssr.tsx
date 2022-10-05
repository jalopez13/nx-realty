// import { useQuery } from '@apollo/client';
import { BaseLayout } from '@nx-realty/shared/ui';
import { GetStaticPropsContext } from 'next';
import { ReactElement } from 'react';
import { initializeApollo } from '../graphql/apollo-client';
import { PropertiesDocument, usePropertiesQuery } from '../graphql/generated';
import type { NextPageWithLayout } from './_app';

const SSR: NextPageWithLayout = () => {
  const { loading, error, data } = usePropertiesQuery({
    variables: {
      params: {
        location: 'stevenson ranch, ca',
        home_type: 'Houses',
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Opps: {error.message}</div>;
  if (!data) return <div>Error loading data from server.</div>;

  console.log('data: ', data);

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
};

SSR.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export async function getServerSideProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PropertiesDocument,
    variables: {
      params: {
        location: 'stevenson ranch, ca',
        home_type: 'Houses',
      },
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default SSR;
