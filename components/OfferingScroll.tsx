import { Fragment } from 'react'

const OfferingScroll = () => {
  const OFFERINGS = [
    'Cardio',
    'Strength Training',
    'Yoga',
    'Kickbox',
    'HIIT',
    'CrossFit',
    'Jiu-Kitsu',
    'Martial Arts',
    'Cycling',
    'Swimming',
  ]
  return (
    <div className='my-32 flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-clip rounded-radius'>
      <div className='overflow-x-clip '>
        <div className='flex flex-none gap-10 overflow-clip py-5 text-my-off-white animate-moveRight [animation-duration:60s]'>
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {OFFERINGS.map((item, index) => (
                <div key={index} className='inline-flex items-center gap-10'>
                  <span className='whitespace-nowrap text-7xl font-semibold font-oswald uppercase text-my-off-white'>
                    {item}
                  </span>
                  <div className='size-5 rounded-full bg-my-primary' />
                </div>
              ))}
            </Fragment>
          ))}
          {OFFERINGS.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-10 animate-slide transition-all duration-500'
            >
              <span className='whitespace-nowrap text-7xl font-semibold font-oswald uppercase text-my-off-white'>
                {item}
              </span>
              <div className='size-5 rounded-full bg-my-primary' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OfferingScroll
