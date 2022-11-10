import { Footer, Header, PrimaryNav } from '@nx-realty/shared/ui';
import { ReactNode } from 'react';
import './globals.css';

export interface HomepageProps {
  children: ReactNode;
}

const RootLayout = ({ children }: HomepageProps) => {
  return (
    <html lang="en">
      <body>
        <div className="text-gray-900 bg-white">
          <Header>
            <PrimaryNav />
          </Header>
          <section>
            <main className="mt-[64px]">{children}</main>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
