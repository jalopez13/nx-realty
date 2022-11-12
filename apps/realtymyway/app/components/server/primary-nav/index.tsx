import Link from "next/link";
import { FaHome } from "react-icons/fa";

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

      <ul className="flex flex-row justify-center items-center space-x-6">
        <li>
          <Link href="/buy" className="text-app-text hover:text-app-accent">
            Find Homes For Sell in Stevenson Ranch, CA
          </Link>
        </li>

        <li>
          <p>|</p>
        </li>

        <li>
          <Link
            href="/mortgage"
            className="text-app-white bg-app-accent hover:bg-app-secondary hover:text-app-white rounded py-2 px-6 transition-color duration-700"
          >
            Mortgages
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
