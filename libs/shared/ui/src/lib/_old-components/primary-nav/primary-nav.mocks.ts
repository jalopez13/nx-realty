import { INavItems } from '@nx-realty/shared/types';

const base: INavItems = {
  navItems: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Buy',
      path: '/buy',
    },
    {
      name: 'Sell',
      path: '/sell',
    },
    {
      name: 'Rent',
      path: '/rent',
    },
  ],
};

export const mockBaseComponentProps = {
  base,
};
