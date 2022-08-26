/* eslint-disable @next/next/no-img-element */
import { BaseLayout } from '@nx-realty/shared/ui';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomePage {}

const HomePage: NextPageWithLayout = (prosp: IHomePage) => {
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default HomePage;
