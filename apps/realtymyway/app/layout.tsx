import { ReactNode } from "react";
import { Footer, Header } from "./components";
import "./globals.css";

export interface HomepageProps {
  children: ReactNode;
}

const RootLayout = ({ children }: HomepageProps) => {
  return (
    <html lang="en">
      <body className="text-gray-900 bg-white">
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
