import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { useAuth } from '@/context/auth';
import NavItem from './NavItem';
import logo from '@/public/images/geria_logo.png';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const { isAuthenticated, signout } = useAuth();

  const handleSignout = (e) => {
    e.preventDefault();

    signout();
  }
  return (
    <header>
      <nav className='w-full bg-white-800'>
        <div className='container max-w-screen-xl px-5 justify-between md:items-center md:flex'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <Link href='/'>
                <Image
                  src={logo}
                  height={35}
                  width={80}
                  alt={'logo'} />
              </Link>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavActive(!navActive)}
                >
                  {navActive ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 text-white'
                      viewBox='0 0 20 20'
                      fill='black'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='black'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navActive ? 'block' : 'hidden'}`}>
              <ul className='lg:text-[20px] items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='text-black'>
                  <NavItem text={'Jobs'} href={'/jobs'} active={false} />
                </li>
                <li className='text-black'>
                  <NavItem text={'Pricing'} href={'/pricing'} active={false} />
                </li>
                <li className='text-black'>
                  <NavItem text={'About Us'} href={'/about-us'} active={false} />
                </li>
                <li className='text-black'>
                  <NavItem text={'Resources'} href={'/resources'} active={false} />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navActive ? 'block' : 'hidden'}`}>
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li className='block'>
                  <Link className='block text-white font-bold border border-[#1C1B17] bg-[#1C1B17] py-2.5 px-5 rounded-lg' href='/careers/hire-talent'>
                    Hire Talent
                  </Link>
                </li>
                <li className='block'>
                  {isAuthenticated ?
                    <Link onClick={handleSignout} className='block text-black font-bold border border-[#FECC00] py-2.5 px-5 rounded-lg' href='/signin'>
                      Sign out
                    </Link>
                    :
                    <Link className='block text-black font-bold border border-[#FECC00] py-2.5 px-5 rounded-lg' href='/signin'>
                      Sign in
                    </Link>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
