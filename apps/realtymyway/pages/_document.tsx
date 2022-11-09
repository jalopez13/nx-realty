import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-gray-800 dark:bg-brand-dark dark:text-brand-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
