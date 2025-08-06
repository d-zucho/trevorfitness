import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import TestButton from '@/components/TestButton'
import { HERO_IMAGE, HERO_IMAGE_2, WITHIN_IMAGE } from '@/constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative pt-40'>
      <Image
        src={HERO_IMAGE}
        alt='Hero Image'
        className='w-full h-auto object-cover brightness-70 mt-40'
        fill
      />
      <MaxWidthWrapper>
        <div className='relative'>
          {/* text */}
          <h1 className='text-[140px] font-oswald uppercase font-semibold leading-[0.99] text-white z-20 absolute inset-x-0 -top-28'>
            Power <br /> from within
          </h1>
          {/* <h1 className='text-[120px] font-oswald uppercase font-semibold leading-[0.99] text-white z-20 drop-shadow-md drop-shadow-my-primary/80 absolute inset-x-0 top-0'>
            Power <br /> from within
          </h1> */}
          <Image
            src={WITHIN_IMAGE}
            alt='Within Logo'
            className='absolute -top-28 right-0 z-40 w-[550px] h-auto  mx-auto'
          />
          <div className='relative'></div>
          {/* img wrapper */}
          <div className='relative w-full h-[500px]'>
            {/* <Image
              src={HERO_IMAGE}
              alt='Hero Image'
              className='w-full h-auto object-cover brightness-70 mt-20'
              fill
            /> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
