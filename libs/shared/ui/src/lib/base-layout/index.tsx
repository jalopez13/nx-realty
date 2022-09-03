import { ReactElement } from 'react';
import { Footer, Hero } from '../../index';

export interface IBaseLayout {
  children: ReactElement;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div className="overflow-hidden min-h-screen w-full">
      {/* <PrimaryNav /> */}
      <Hero />
      <main className="h-screen container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
