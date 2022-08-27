import { INavItems } from '@nx-realty/shared/types';
import Link from 'next/link';

export const PrimaryNav = ({ navItems }: INavItems) => {
  return (
    <nav>
      <div>RealtyMyWay</div>
      <ul>
        <li>
          <Link href="/">
            <a>Buy</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Sell</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Rent</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>Mortgages</a>
          </Link>
        </li>

        <li>
          <button className="">GET A QUOTE</button>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
