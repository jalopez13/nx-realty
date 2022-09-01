import { FaHome } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light">
      <div className="sm:flex sm:items-center sm:justify-between container">
        <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
          <div className="mr-3 h-8 relative">
            <FaHome className="w-7 h-7 text-brand-dark/70 dark:text-brand-light/70" />
          </div>

          <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-brand">
            RealtyMyWay
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-brand/70 sm:mx-auto lg:my-8" />
      <span className="block text-sm  sm:text-center">
        © 2022{' '}
        <a href="/" className="hover:underline">
          RealtyMyWay.com
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
