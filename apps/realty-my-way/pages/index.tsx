import { BaseLayout } from '@nx-realty/shared/ui';
// import axios from 'axios';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { ApiResponse } from '@nx-realty/shared/types';

const HomePage: NextPageWithLayout = ({ message }: ApiResponse) => {
  return (
    <>
      <h1>HomePage - {message}</h1>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default HomePage;

export const getStaticProps = async (ctx) => {
  // const response = await axios(`${process.env.API_ENDPOINT}`);

  return {
    props: {
      message: 'hello sucka!',
    },
  };
};
