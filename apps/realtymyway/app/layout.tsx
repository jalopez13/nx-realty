import { ReactNode } from "react";
import { Footer, Header } from "./components/client";

import "../styles/globals.css";

export interface HomepageProps {
  children: ReactNode;
}

const RootLayout = ({ children }: HomepageProps) => {
  return (
    <html lang="en">
      <body className="text-text bg-background">
        <div>
          <Header />
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
