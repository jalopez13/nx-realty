import { useQuery } from '@apollo/client';
import { BaseLayout } from '@nx-realty/shared/ui';
import { ReactElement } from 'react';
import { PropertiesDocument } from '../graphql/generated';
import type { NextPageWithLayout } from './_app';

const MainQuery = PropertiesDocument;

const CSR: NextPageWithLayout = () => {
  const { loading, error, data } = useQuery(MainQuery, {
    variables: { params: { location: 'burbank, ca', home_type: 'Houses' } },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Opps: {error.message}</div>;
  if (!data) return <div>Error loading data from server.</div>;

  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
};

CSR.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default CSR;
