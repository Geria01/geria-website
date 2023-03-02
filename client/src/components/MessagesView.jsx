import Image from 'next/image';

import MessageSummary from '@/components/MessageSummary';
import Button from '@/components/Button';
import SearchIcon from '@/public/icons/search_icon.svg';
import sendIcon from '@/public/icons/send_button_icon.png';
import emoticonIcon from '@/public/icons/emoticon_icon.png';
import attachmentIcon from '@/public/icons/attachment_icon.png'

const msgSummaries = [
  {
    'idx': 1,
    'subject': 'Message subject',
    'time': '12 mins ago',
    'excerpt': 'We want want to invite you for a qui to invite you for a qui',
  },
  {
    'idx': 2,
    'subject': 'Message subject',
    'time': '12 mins ago',
    'excerpt': 'We want to invite you for a qui want to invite you for a qui',
  },
  {
    'idx': 3,
    'subject': 'Message subject',
    'time': '12 mins ago',
    'excerpt': 'We want to invite you for a qui want to invite you for a qui',
  },
  {
    'idx': 4,
    'subject': 'Message subject',
    'time': '12 mins ago',
    'excerpt': 'We want to invite you for a qui want to invite you for a qui',
  },
  {
    'idx': 5,
    'subject': 'Message subject',
    'time': '12 mins ago',
    'excerpt': 'We want to invite you for a qui want to invite you for a qui',
  },
]
const MessagesView = () => {
  return (
    <div className='grid grid-cols-3 gap-0'>
      <div className='col-span-1 border-r border-[#D3D6DB]'>
        <div className='relative p-3 lg:p-8'>
          <div className="relative mb-4 w-full flex-wrap">
            <SearchIcon className='absolute left-2 top-1/2 -translate-y-1/2 opacity-4' />
            <input
              type="search"
              className="relative m-0 w-full block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding pl-10 pr-6 py-2 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2" />
          </div>
          <div className='left-[max(0px,calc(50%-45rem))] right-auto overflow-y-auto'>
            {
              msgSummaries.map((summary, idx) => (
                <MessageSummary
                  key={idx}
                  subject={summary.subject}
                  time={summary.time}
                  excerpt={summary.excerpt}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className='col-span-2'>
        <div className='p-8'>
          <h3 className='mb-4 text-[#202430] text-[24px]'>Message subject</h3>
          <div className='p-4 border border-[#D3D6DB] mb-8'>
            <p>My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.</p>
          </div>
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <Button
              classes={'absolute left-3 top-1/2 -translate-y-1/2 z-[2] rounded-lg border-0 p-2'}
              href={''}>
              <Image
                className='h-[16px] w-auto'
                src={attachmentIcon}
                alt={''}
              />
            </Button>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l rounded-0 border border-[#D3D6DB] bg-transparent bg-clip-padding pl-12 pr-10 py-2.5 text-base font-normal leading-[1.6] outline-none transition ease-in-out focus:z-[3] focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2" />
            <Button
              classes={'absolute right-16 top-1/2 -translate-y-1/2 z-[2] p-2 rounded-lg border-0'}
              href={''}>
              <Image
                className='h-[16px] w-auto'
                src={emoticonIcon}
                alt={''}
              />
            </Button>
            <Button
              classes={'absolute right-2 top-1/2 -translate-y-1/2 z-[2] bg-[#1C1B17] px-5 py-2 rounded-lg border-0'}
              href={''}>
              <Image
                className='h-[14px] w-auto'
                src={sendIcon}
                alt={''}
              />
            </Button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MessagesView
