
const MaxCharacterInfo = ({ count, max }) => {
  return (
    <div className='flex justify-between items-center p-1'>
      <span
        className='text-[#A8ADB7]'>
        Maximum {max} characters
      </span>
      <span
        className=''>
        {count}/{max}
      </span>
    </div>
  )
}

export default MaxCharacterInfo
