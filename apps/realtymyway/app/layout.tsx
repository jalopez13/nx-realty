import { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

import "../styles/globals.css";

export interface HomepageProps {
  children: ReactNode;
}

const RootLayout = ({ children }: HomepageProps) => {
  return (
    <html lang="en">
      <body className="text-app-text bg-app-background">
        <Header />
        <section>
          <main className="mt-[64px]">{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
