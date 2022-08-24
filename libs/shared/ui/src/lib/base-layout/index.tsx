import Image from 'next/image';
import { ReactElement } from 'react';

import { NextIcon } from '@nx-realty/shared/assets';

export interface IBaseLayout {
  children: ReactElement;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <main className="app">
      <section className="header">
        <h1>Header</h1>
      </section>
      <div className="w-24 h-24 fill-pink-500">
        <NextIcon />
      </div>

      <div className="relative w-96 h-96">
        <Image
          src="/assets/the-batman.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      {children}
      <section className="header">
        <h1>Footer</h1>
      </section>
    </main>
  );
};

export default BaseLayout;
