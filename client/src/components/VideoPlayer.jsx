import Image from 'next/image';

import PlayButton from '@/public/icons/play.svg';

const VideoPlayer = ({ src }) => {

  return (
    <div className="relative flex justify-center items-center mb-4">
      <div className="absolute">
        <button><PlayButton height={90} width={90} alt={'Play button'} /></button>
      </div>
      <video className='h-[200px] lg:h-[360px] w-[100%] lg:w-[360px] object-cover rounded-lg'>
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoPlayer
