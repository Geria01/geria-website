import { Oval } from 'react-loader-spinner'

const FullPageLoader = () => {
  return (
    <div className="relative items-center block max-full h-screen p-6 bg-white border border-gray-100">
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <Oval
          height={60}
          width={60}
          color="#EBEBEB"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#515B6F"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default FullPageLoader;
