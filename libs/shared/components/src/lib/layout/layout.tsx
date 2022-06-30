import { ReactElement } from 'react';
import { PrimaryNav, Footer } from '@nx-realty/shared/components';
  

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactElement
}


export const Layout = (page: ReactElement) => {
 return (
  <>
  <PrimaryNav />
  {page}
  <Footer />
  </>
 );
}


export default Layout;
