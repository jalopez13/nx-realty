import { BaseLayout } from '@nx-realty/shared/ui';
import Link from 'next/link';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Hello</h1>
      <div>
        <Link href={'/ssr'}>SSR</Link> <br />
        <Link href={'/csr'}>CSR</Link> <br />
        <Link href={'/ssg'}>SSG</Link>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default HomePage;
