
const Urls = ({ handleChange, errors }) => {
  return (
    <>
      <div>
        <div className='mb-4'>
          <label
            htmlFor='githubUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            Github URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='githubUrl'
            onChange={handleChange}
          />
          {errors.githubUrl && <span className='text-xs text-red-600'>{errors.githubUrl}</span>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='portfolioUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            Portfolio URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='portfolioUrl'
            onChange={handleChange}
          />
          {errors.portfolioUrl && <span className='text-xs text-red-600'>{errors.portfolioUrl}</span>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='websiteUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            Personal Website URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='websiteUrl'
            onChange={handleChange}
          />
          {errors.websiteUrl && <span className='text-xs text-red-600'>{errors.websiteUrl}</span>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='linkedinUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            LinkedIn URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='linkedinUrl'
            onChange={handleChange}
          />
          {errors.linkedinUrl && <span className='text-xs text-red-600'>{errors.linkedinUrl}</span>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='twitterUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            Twitter URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='twitterUrl'
            onChange={handleChange}
          />
          {errors.twitterUrl && <span className='text-xs text-red-600'>{errors.twitterUrl}</span>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='instagramUrl'
            className='inline-block	font-semibold text-[#515B6F] mb-2'>
            Instagram URL
          </label>
          <input
            type='text'
            className='w-full rounded-lg border border-[#D6DDEB] px-[16px] py-[12px]'
            name='instagramUrl'
            onChange={handleChange}
          />
          {errors.instagramUrl && <span className='text-xs text-red-600'>{errors.instagramUrl}</span>}
        </div>
      </div>
    </>
  )
}

export default Urls;
