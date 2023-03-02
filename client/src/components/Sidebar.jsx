import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DashboardView from '@/components/DashboardView';
import logo from '@/public/images/geria_logo.png';
import SidebarIcon1 from '@/public/icons/sidebar_icon_1.svg';
import SidebarIcon2 from '@/public/icons/sidebar_icon_2.svg';
import SidebarIcon3 from '@/public/icons/sidebar_icon_3.svg';
import SidebarIcon4 from '@/public/icons/sidebar_icon_4.svg';
import SidebarIcon5 from '@/public/icons/sidebar_icon_5.svg';
import useOutsideClick from '@/hooks/useClickOutside';
import useViewport from '@/hooks/useViewport';
import avatarUrl from '@/public/images/user_avatar.png'

const Sidebar = ({ user, activeTab, handleTabChange, setShowSidebar }) => {

  const handleClickOutside = () => {
    setShowSidebar(true);
  };

  const { isMobile } = useViewport(768);
  const ref = useOutsideClick(handleClickOutside, isMobile);
  const messages = [{}];

  return (
    <>
      <section
        ref={ref}
        className="fixed z-[1035] top-0 left-0 flex h-[600px] min-h-full items-start justify-center overflow-y-hidden border bg-[#F8F8FD]">
        <nav className=" h-screen w-80 overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] bg-[#F8F8FD]">
          <div className='py-4 px-8'>
            <Image
              src={logo}
              height={36}
              width={80}
              alt={'Logo'} />
          </div>
          <ul className="relative m-0 list-none">
            <li className="relative px-2">
              {activeTab === 'dashboard' && <span className='absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#1C1B17] h-[32px] w-[4px] width-2px'></span>}
              <button
                onClick={(e) => handleTabChange(e, 'dashboard')}
                className={`${activeTab === 'dashboard' && 'bg-[#FECC00]'} w-full flex items-center h-12 cursor-pointer truncate py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#FECC00] hover:text-inherit hover:outline-none focus:outline-none my-2`}>
                <span className="mr-4">
                  <SidebarIcon1 />
                </span>
                <span>Dashboard</span>
              </button>
            </li>
            <li className="relative px-2">
              {activeTab === 'messages' && <span className='absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#1C1B17] h-[32px] w-[4px] width-2px'></span>}
              <Link
                href={'#'}
                onClick={(e) => handleTabChange(e, 'messages')}
                className={`${activeTab === 'messages' && 'bg-[#FECC00]'} w-full flex h-12 cursor-pointer items-center truncate py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#FECC00] hover:text-inherit hover:outline-none focus:outline-none my-2`}>
                <span className="mr-4">
                  <SidebarIcon2 />
                </span>
                <span>Messages</span>
                <span
                  className="absolute right-2 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none">
                  <span className='flex items-center justify-center text-[10px] font-semibold text-white bg-[#1C1B17] rounded-full h-6 w-6'>{messages && messages.length}</span>
                </span>
              </Link>
            </li>
            <li className="relative px-2">
              {activeTab === 'profile' && <span className='absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#1C1B17] h-[32px] w-[4px] width-2px'></span>}
              <Link
                href={'#'}
                onClick={(e) => handleTabChange(e, 'profile')}
                className={`${activeTab === 'profile' && 'bg-[#FECC00]'} w-full flex h-12 cursor-pointer items-center truncate py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#FECC00] hover:text-inherit hover:outline-none focus:outline-none my-2`}>
                <span className="mr-4">
                  <SidebarIcon3 />
                </span>
                <span>My Public Profile</span>
                <span className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                  data-te-sidenav-rotate-icon-ref>
                </span>
              </Link>
            </li>
          </ul>
          <hr className="my-4" />
          <ul className="relative m-0 list-none px-[0.2rem]">
            <li className="relative px-2">
              {activeTab === 'settings' && <span className='absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#1C1B17] h-[32px] w-[4px] width-2px'></span>}
              <Link
                href={'#'}
                onClick={(e) => handleTabChange(e, 'settings')}
                className={`${activeTab === 'settings' && 'bg-[#FECC00]'} w-full flex h-12 cursor-pointer items-center truncate py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#FECC00] hover:text-inherit hover:outline-none focus:outline-none my-2`}
                data-te-sidenav-link-ref>
                <span className="mr-4">
                  <SidebarIcon4 />
                </span>
                <span>Settings</span>
              </Link>
            </li>
            <li className="relative px-2">
              {activeTab === 'help-center' && <span className='absolute z-10 top-1/2 -translate-y-1/2 left-0 bg-[#1C1B17] h-[32px] w-[4px] width-2px'></span>}
              <Link
                href={'#'}
                onClick={(e) => handleTabChange(e, 'help-center')}
                className={`${activeTab === 'help-center' && 'bg-[#FECC00]'} w-full flex h-12 cursor-pointer items-center truncate py-4 px-6 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#FECC00] hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none my-2`}>
                <span className="mr-4">
                  <SidebarIcon5 />
                </span>
                <span>Help Center</span>
                <span
                  className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                </span>
              </Link>
            </li>
          </ul>
          <div className='absolute left-0 right-0 bottom-0 py-4'>
            <div className='flex items-center justify-center'>
              <Image
                className='rounded-full'
                src={avatarUrl}
                height={50}
                width={50}
                alt={'User Avatat'}
              />
              <div className='ml-3'>
                <h5>{user.firstname} {user.lastname}</h5>
                <p className='max-w-fit'>{user.email}</p>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Sidebar;
