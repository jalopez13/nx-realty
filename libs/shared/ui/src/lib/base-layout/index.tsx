import { Footer, PrimaryNav } from '@nx-realty/shared/ui';
import { ReactElement } from 'react';

export interface IBaseLayout {
  children: ReactElement;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <div className="px-4 overflow-hidden">
      <PrimaryNav
        navItems={[
          { name: 'Buy', path: '/buy' },
          { name: 'Sell', path: '/sell' },
          { name: 'Rent', path: '/rent' },
        ]}
      />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
