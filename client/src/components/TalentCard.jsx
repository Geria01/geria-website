import VideoPlayer from './VideoPlayer';

const TalentCard = ({ name, summary, position, employer, videoSrc }) => {
  return (
    <div className='mx-auto p-5 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-[#E1ECF0] max-w-[405px]'>
      <VideoPlayer src={videoSrc} />
      <div className='px-4'>
        <h3 className='text-2xl mb-3'>{name}</h3>
        <p className='mb-8 opacity-80'>{summary}</p>
        <p className='font-bold'>{position}</p>
        <p className='text-sm opacity-60 font-semibold'>{employer}</p>
      </div>
    </div>
  )
}

export default TalentCard
