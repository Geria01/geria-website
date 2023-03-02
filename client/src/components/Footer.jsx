import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/light_logo.png';
import FacebookIcon from '@/public/icons/facebook.svg';
import TwitterIcon from '@/public/icons/twitter.svg';
import InstagramIcon from '@/public/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='footer bg-[#1C1B17] py-10 text-white'>
      <div className='container max-w-screen-xl px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 pb-4'>
          <div className='order-2 md:order-1'>
            <div className='pb-8'>
              <Image
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
                <ul className='px-1 pr-[65px]'>
                  <li className='mb-[8px] font-["clash_display"] font-bold leading-8'><Link href='/about-us'>About us</Link></li>
                  <li className='mb-[8px] font-["clash_display"] font-bold leading-8'><Link href='/how-it-works'>How it works</Link></li>
                  <li className='mb-[8px] font-["clash_display"] font-bold leading-8'><Link href='/vetting-process'>Vetting process</Link></li>
                  <li className='mb-[8px] font-["clash_display"] font-bold leading-8'><Link href='/jobs'>Jobs</Link></li>
                  <li className='mb-[8px] font-["clash_display"] font-bold leading-8'><Link href='/blog'>Blog</Link></li>
                </ul>
              </div>
              <div>
                <ul className='px-1'>
                  <li><Link className='font-["clash_display"] font-bold leading-8' href='/privacy-policy'>Privacy policy</Link></li>
                  <li><Link className='font-["clash_display"] font-bold leading-8' href='/terms-and-conditions'>Terms & conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex py-2'>
          <Link href='/'>
            <FacebookIcon height={18} title='Follow us on Facebook' />
          </Link>
          <Link href='/' className='mx-6'>
            <TwitterIcon height={18} title='Follow us on Twitter' />
          </Link>
          <Link href='/'>
            <InstagramIcon height={18} title='Follow us on Instagram' />
          </Link>
        </div>
      </div>
    </footer >
  );
}

export default Footer
