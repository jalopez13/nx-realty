import { ReactNode } from "react";
import { Footer, Header } from "./components/client";

import "../styles/globals.css";

export interface HomepageProps {
  children: ReactNode;
}

const RootLayout = ({ children }: HomepageProps) => {
  return (
    <html lang="en">
      <body className="text-app-text bg-app-background">
        <div className="overflow-hidden">
          <Header />
          <section>
            <main
              className="mt-[64px]"
              style={{ minHeight: "calc(100vh - 238px)" }}
            >
              {children}
            </main>
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
