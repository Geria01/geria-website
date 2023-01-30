import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/light_logo.png';
import facebookIcon from '@/public/icons/facebook.svg';
import twitterIcon from '@/public/icons/twitter.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className='footer bg-[#1C1B17] py-10 text-white'>
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 pb-4'>
          <div className='order-2 md:order-1'>
            <div className='pb-8'>
              <Image
                className={styles.logo}
                src={logo}
                height={35}
                width={80}
                alt={'Home'} />
            </div>
            <div className='pb-4'>
              <p className='opacity-80'>UK Address</p>
              <p className='font-semibold'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            </div>
            <div className='pb-4'>
              <p className='opacity-80'>Nigeria Address</p>
              <p className='font-semibold'>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div className='opacity-80 pb-4'>
              <p>hello@geria.com</p>
            </div>
          </div>
          <div className='ml-0 md:ml-auto mb-14 md:mb-0 order-1 md:order-2'>
            <div className='grid grid-flow-col auto-cols-max'>
              <div className='grid grid-flow-col auto-cols-max'>
                <ul className={`${styles.links} px-1 pr-[65px]`}>
                  <li className='mb-[8px]'><Link href='/about-us'>About us</Link></li>
                  <li className='mb-[8px]'><Link href='/how-it-works'>How it works</Link></li>
                  <li className='mb-[8px]'><Link href='/vetting-process'>Vetting process</Link></li>
                  <li className='mb-[8px]'><Link href='/jobs'>Jobs</Link></li>
                  <li className='mb-[8px]'><Link href='/blog'>Blog</Link></li>
                </ul>
              </div>
              <div>
                <ul className={`${styles.links} px-1`}>
                  <li><Link href='/privacy-policy'>Privacy policy</Link></li>
                  <li><Link href='/terms-and-conditions'>Terms & conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex py-2'>
          <Link href='/'>
            <Image
              className={styles.social}
              src={facebookIcon}
              height={18}
              width={18}
              alt='Follow us on Facebook'
            />
          </Link>
          <Link href='/' className='mx-6'>
            <Image
              className={styles.social}
              src={twitterIcon}
              height={18}
              width={18}
              alt='Follow us on Twitter'
            />
          </Link>
          <Link href='/'>
            <Image
              className={styles.social}
              src={instagramIcon}
              height={18}
              width={18}
              alt='Follow us on Instagram'
            />
          </Link>
        </div>
      </div>
    </footer >
  );
}

export default Footer
