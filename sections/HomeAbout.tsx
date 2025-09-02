import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { TAboutStat } from '@/lib/types'
import Image from 'next/image'

interface HomeAboutProps {
  reverse: boolean
  stat: TAboutStat
}

const HomeAbout = ({ reverse, stat }: HomeAboutProps) => {
  return (
    <section className='py-40'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between gap-10'>
          <div className={`flex-1 ${reverse ? 'order-2' : 'order-1'}`}>
            <Image
              src='/about1.png'
              alt='Trevor'
              width={600}
              height={400}
              className='rounded-lg'
            />
          </div>
          <div
            className={`flex flex-col gap-5 flex-1 ${
              reverse ? 'order-1 pr-10' : 'order-2 pl-10'
            }`}
          >
            <h2 className='text-6xl font-bold font-oswald uppercase text-white'>
              {stat.title}
            </h2>
            <p className='text-text-secondary font-archivo tracking-wide'>
              {stat.description}
            </p>
            <div className='flex gap-5 w-full items-center justify-between'>
              <div className='flex items-center gap-5 p-3 rounded-base'>
                {stat.stats.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col rounded-base bg-my-gray-700 p-3 items-center justify-center gap-4'
                  >
                    <span className='font-bold font-oswald text-my-primary text-5xl'>
                      {item.stat}
                    </span>
                    {item.detail && (
                      <span className='text-sm tracking-wide text-text-secondary'>
                        {item.detail}
                      </span>
                    )}
                  </div>
                ))}
                {/* <span className='font-bold font-oswald text-my-primary text-5xl'>
                    {item.stat}
                  </span>
                  <span className='text-sm tracking-wide text-text-secondary'>
                    {item.detail}
                  </span> */}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeAbout
