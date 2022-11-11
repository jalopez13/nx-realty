"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

const linkstyles = "hover:text-green-600";

export const PrimaryNav = () => {
  return (
    <nav className="primary-nav flex flex-row justify-between items-center font-semibold">
      <div>
        <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
          <div className="mr-4 h-8 relative">
            <FaHome className="w-full h-full text-green-600" />
          </div>

          <span className="text-2xl font-semibold pt-1">RealtyMyWay</span>
        </a>
      </div>

      <ul className="flex flex-row justify-center items-center space-x-6">
        <li>
          <Link href="/buy" className={`${linkstyles}`}>
            Buy
          </Link>
        </li>

        <li>
          <Link href="/sell" className={`${linkstyles}`}>
            Sell
          </Link>
        </li>

        <li>
          <Link href="/mortgage" className={`${linkstyles}`}>
            Mortgage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
