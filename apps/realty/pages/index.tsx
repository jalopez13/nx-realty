import Head from 'next/head';
import type { NextPageWithLayout } from './_app'
import { Layout } from '@nx-realty/shared/components';

const IndexPage: NextPageWithLayout  = () => {
  return (
    <>
      <Head>
        <title>NX Realty</title>
      </Head>
      <main>
        <h1>Index Page</h1>
      </main>
    </>
  );
}

IndexPage.getLayout = Layout;


export default IndexPage;
