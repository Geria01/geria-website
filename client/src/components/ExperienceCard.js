import Image from 'next/image';

import seperator from '@/public/icons/seperator.png';

const ExperienceCard = (
  { Position,
    Company,
    Mode,
    StartDate,
    EndDate,
    Location,
    JobDescription, }) => {
  return (
    <div className="mb-6 [&:not(:last-child)]:border-b border-[#D6DDEB]">
      <p className='font-semibold mb-2'>{Position}</p>
      <div className='flex items-center mb-2'>
        <span className='text-[#333333] font-medium'>{Company}</span>
        <Image
          className='mx-2'
          src={seperator}
          alt={''} />
        <span className='text-[#515B6F]'>{Mode}</span>
        <Image
          className='mx-2'
          src={seperator}
          alt={''} />
        <span className='text-[#515B6F]'>{StartDate}</span>
        <span>&nbsp;-&nbsp;</span>
        <span className='text-[#515B6F]'>{EndDate}&nbsp;</span>
        <span className='text-[#515B6F]'>(1y 1m)</span>
      </div>
      <p className='text-[#7C8493] mb-2'>{Location}</p>
      <p className='text-[#333333] mb-6'>{JobDescription}</p>
    </div>
  )
}

export default ExperienceCard;
