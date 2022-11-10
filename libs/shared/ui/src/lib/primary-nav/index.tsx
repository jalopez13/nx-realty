'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseComponent {}

const linkstyles = 'hover:text-green-600';

export const PrimaryNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center font-semibold ">
      <div>
        <a href="/" className="flex justify-center items-center mb-4 sm:mb-0">
          <div className="mr-4 h-8 relative">
            <FaHome className="w-full h-full" />
          </div>

          <span className="text-2xl font-semibold pt-1">RealtyMyWay</span>
        </a>
      </div>
      <ul className="flex flex-row justify-center items-center space-x-6">
        <li>
          <Link
            href="/"
            className={`${linkstyles} ${pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/buy"
            className={`${linkstyles} ${pathname === '/buy' ? 'active' : ''}`}
          >
            Buy
          </Link>
        </li>

        <li>
          <Link
            href="/sell"
            className={`${linkstyles} ${pathname === '/sell' ? 'active' : ''}`}
          >
            Sell
          </Link>
        </li>
        <li>
          <Link
            href="/mortgage"
            className={`${linkstyles} ${
              pathname === '/mortgage' ? 'active' : ''
            }`}
          >
            Mortgage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
