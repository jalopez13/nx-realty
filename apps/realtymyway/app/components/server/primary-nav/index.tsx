import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

export const PrimaryNav = () => {
  return (
    <nav className="primary-nav flex flex-row justify-between items-center font-semibold">
      <div>
        <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
          <div className="mr-4 h-8 relative">
            <FaHome className="w-full h-full text-app-accent" />
          </div>

          <span className="text-2xl font-semibold pt-1">RealtyMyWay</span>
        </a>
      </div>

      <button className="absolute top-4 right-8 lg:hidden">
        <HiMenuAlt3 className="text-4xl" />
      </button>

      <ul className="hidden space-x-6 lg:flex lg:flex-row lg:justify-center lg:items-center">
        <li>
          <Link
            href="/for-sell"
            className="text-app-text hover:text-app-accent"
          >
            For Sell
          </Link>
        </li>

        <li>
          <Link
            href="/for-rent"
            className="text-app-text hover:text-app-accent"
          >
            For Rent
          </Link>
        </li>

        <li>
          <p>|</p>
        </li>

        <li>
          <Link
            href="/"
            className="text-app-white bg-app-accent rounded py-2 px-6 transition-color duration-700 border border-gray-200 hover:bg-app-accent-secondary hover:text-app-white leading-none font-semibold "
          >
            Mortgages
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
