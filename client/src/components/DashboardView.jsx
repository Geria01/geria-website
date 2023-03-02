import Button from '@/components/Button';
import completeProfileIcon from '@/public/icons/complete_profile_icon.png'
import Image from 'next/image';
import Link from 'next/link';
import FullPageLoader from '@/components/FullPageLoader';

const DashboardView = ({ user }) => {

  if (!user) return <FullPageLoader />

  return (
    <>
      <div className='px-5'>
        <div className='py-8'>
          <h2 className='text-[24px] mb-2'>Good morning, {`${user.firstname}`}</h2>
          <p>Here is what’s happening with your job search applications.</p>
        </div>
        {(user.last_login === null || user.last_login.toDateString() === new Date().toDateString()) &&
          (<div className='flex justify-between items-center bg-[#FECC00] p-4 rounded-lg'>
            <div className='flex justify-center items-center'>
              <Image
                src={completeProfileIcon}
                height={59}
                width={56}
                alt={'icon'} />
              <div className='ml-3 mr-6 max-w-[700px]'>
                <h2>Please complete your profile information</h2>
                <p>Kindly complete your profile information about your work experience and education background to help us better match you with job opportunities</p>
              </div>
            </div>
            <Link className={'block bg-[#1C1B17] text-[#FFFFFF] px-6 py-3 rounded-lg whitespace-nowrap'} href={'/complete-profile'}>Complete profile</Link>
          </div>)
        }
      </div>
    </>
  )
}

export default DashboardView;
