import { INavItems } from '@nx-realty/shared/types';
import { useRef, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import Link from '../link';

const linkClasses = 'text-lg hover:text-purple-400 duration-500';

export const PrimaryNav = ({ navItems }: INavItems) => {
  const [open, setOpen] = useState(true);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    const menu = menuRef?.current;

    if (!open) {
      menu.classList?.add('top-[80px]');
      menu.classList.add('opacity-100');
      setOpen(true);
    } else {
      menu?.classList.remove('top-[80px]');
      menu?.classList.remove('opacity-0');
      setOpen(false);
    }
  };

  return (
    <nav className="shadowp-5 bg-white md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-mono flex flex-row items-center cursor-pointer">
          <span className="mr-2">
            <FaHome className="w-7 h-7 fill-purple-600" />
          </span>
          <span className="mt-2 font-semibold text-gray-800">RealtyMyWay</span>
        </span>

        <span
          className="text-3xl cursor-pointer md:hidden block fill-gray-800"
          onClick={toggleMenu}
        >
          {open ? <IoMenu /> : <IoClose />}
        </span>
      </div>

      <ul
        ref={menuRef}
        className="md:flex md:items-center md:space-x-4 mt-2 md:z-auto md:static z-10 bg-white md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 absolute top-[-400px] opacity-0 md:opacity-100 transition-all ease-in duration-500"
      >
        {navItems.map(({ name, path }) => {
          return (
            <li key={name}>
              <Link href={path} classes={linkClasses}>
                {name}
              </Link>
            </li>
          );
        })}

        <li className="my-4">
          <button className="px-6 py-2 bg-purple-700 text-white font-semibold text-center rounded duration-500 hover:bg-purple-500">
            GET A QUOTE
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
