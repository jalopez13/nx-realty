import { ReactElement } from 'react';

export interface IBaseLayout {
  children: ReactElement;
}

export const BaseLayout = ({ children }: IBaseLayout) => {
  return (
    <main className="app">
      <section className="header">
        <h1>Header</h1>
      </section>
      {children}
      <section className="header">
        <h1>Footer</h1>
      </section>
    </main>
  );
};

export default BaseLayout;
