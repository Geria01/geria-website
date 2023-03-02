const EducationCard = (
  { Institution,
    Programme,
    StartDate,
    EndDate,
  }) => {
  return (
    <div className="mb-6 [&:not(:last-child)]:border-b border-[#D6DDEB]">
      <p className='font-semibold mb-2'>{Institution}</p>
      <p className='text-[#515B6F]'>{Programme}</p>
      <p className='text-[#515B6F] mb-6'>{StartDate}&nbsp;-&nbsp;{EndDate}</p>
    </div>
  )
}

export default EducationCard;
