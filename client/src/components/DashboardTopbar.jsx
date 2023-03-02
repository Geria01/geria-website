import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';
import DashBoardMenuIcon from '@/public/icons/dashboard_menu.svg';
import notification from '@/public/icons/notification.png';
import useViewport from '@/hooks/useViewport';

const DashboardTopbar = ({ toggleSidebar, activeTab }) => {
  const { isMobile } = useViewport(768);
  let viewTitle = (activeTab.replace(/-/g, ' '));
  viewTitle = viewTitle.charAt(0).toUpperCase() + viewTitle.slice(1);

  return (
    <nav className='flex-no-wrap relative flex w-full items-center justify-between bg-white border-b border-[#D3D6DB] py-4 lg:justify-start'>
      <div className='flex w-full flex-wrap items-center justify-between px-6'>
        <div className='flex items-center'>
          <button
            onClick={toggleSidebar}
            className={'inline-block'}>
            <DashBoardMenuIcon className='h-6 w-auto' />
          </button>
          <h1 className={`text-12 md:text-[26px] lg:text-[32px] inline-block ${isMobile ? 'ml-3 md:ml-5' : 'ml-72'}`}>{viewTitle}</h1>
        </div>
        <div className='flex justify-center items-center'>
          <Button classes={'mr-6 font-bold inline-block text-black font-bold border border-[#FECC00] py-1.5 md:py-2.5 px-3 md:px-5 rounded-lg'} href={'/'} >
            Back to homepage
          </Button>
          <Image
            src={notification}
            alt={'Notification Icon'}
            height={16}
            width={0} />
        </div>
      </div>
    </nav >
  )
}

export default DashboardTopbar;
