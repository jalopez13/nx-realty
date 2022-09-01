import { ReactElement } from 'react';
import { Carousel, Footer, Hero, PrimaryNav } from '../../index';

export interface IBaseLayout {
  children: ReactElement;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div className="overflow-hidden min-h-screen w-full">
      <PrimaryNav />
      <Hero />
      <main className="h-screen">
        <Carousel />
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
