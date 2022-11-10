import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IoClose, IoHome, IoMenu, IoMoon, IoSunny } from 'react-icons/io5';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPrimaryNav {}

export const PrimaryNav = (props: IPrimaryNav) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  shadow bg-brand-light dark:bg-brand-dark border-b border-gray-300 dark:border-brand-light">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-3xl flex flex-row items-center gap-4"
            href="/"
          >
            <span className="text-brand-dark/70 dark:text-brand-light/70">
              <IoHome />
            </span>
            <span className="text-gary-800 dark:text-brand-light">
              RealtyMyWay
            </span>
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <IoClose className="w-8 h-8 text-brand-dark dark:text-brand-light" />
            ) : (
              <IoMenu className="w-8 h-8 text-brand-dark dark:text-brand-light" />
            )}
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto pl-8">
            <li className="nav-item">
              <a
                className="nav-item-link  py-2 flex items-center text-base uppercase font-medium leading-snug hover:opacity-75 duration-500 hover:underline hover:text-brand dark:text-brand-light"
                href="/buy"
              >
                <span className="ml-4">Home</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-item-link  py-2 flex items-center text-base uppercase font-medium leading-snug hover:opacity-75 duration-500 hover:underline hover:text-brand dark:text-brand-light"
                href="/buy"
              >
                <span className="ml-4">Buy</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-item-link  py-2 flex items-center text-base uppercase font-medium leading-snug hover:opacity-75 duration-500 hover:underline hover:text-brand dark:text-brand-light"
                href="/sell"
              >
                <span className="ml-4">Sell</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-item-link  py-2 flex items-center text-base uppercase font-medium leading-snug hover:opacity-75 duration-500 hover:underline hover:text-brand dark:text-brand-light"
                href="/rent"
              >
                <span className="ml-4">Rent</span>
              </a>
            </li>

            <li className="nav-item">
              <button
                onClick={() =>
                  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                }
              >
                {currentTheme === 'light' ? (
                  <IoMoon className="text-brand-light bg-brand-dark/70 dark:text-brand-dark dark:bg-brand-light/70 w-9 h-9 cursor-pointer p-2 rounded ml-4 mb-2" />
                ) : (
                  <IoSunny className="text-brand-light bg-brand-dark/70 dark:text-brand-dark dark:bg-brand-light/70 w-9 h-9 cursor-pointer p-2 rounded ml-4 mb-2" />
                )}
              </button>
            </li>

            <li>
              <a
                className="btn focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:ml-4 mt-4 md:-mt-1 inline-block shadow duration-500 text-brand-light bg-brand-dark hover:text-white hover:bg-brand"
                href="/mortgage"
              >
                <span>Home Loans</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNav;
