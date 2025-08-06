import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import TestButton from '@/components/TestButton'
import { HERO_IMAGE, HERO_IMAGE_2, WITHIN_IMAGE } from '@/constants'
import Image from 'next/image'

// xs: screens from 0px to 639px
// sm: screens from 640px to 767px
// md: screens from 768px to 1023px
// lg: screens from 1024px to 1279px
// xl: screens from 1280px to 1535px
// 2xl: screens from 1536px and up

const Hero2 = () => {
  return (
    <section className='relative h-[calc(100vh_-_80px)]'>
      <MaxWidthWrapper className=''>
        <div className='bg-[url("/hero.jpg")] bg-center bg-cover w-full h-[500px] brightness-65 absolute inset-x-0 bottom-0 z-0'></div>
        {/* <div className='absolute inset-0 z-10 flex items-start justify-end top-[65px] xl:right-[150px] max-w-[1600px]]'>
          <Image
            src={WITHIN_IMAGE}
            alt='Within Image'
            width={400}
            height={250}
            className='w-[700px] h-[200px]'
          />
        </div> */}
        <div className='relative pt-5'>
          <h1 className='text-[80px] max-md:mx-auto text-center md:text-left md:text-[112px] lg:text-[150px] font-oswald uppercase leading-[1.1] font-semibold block relative md:pt-[60px] lg:pt-0 w-fit'>
            Power <br /> from within
          </h1>
          <div className='max-md:top-[260px] absolute inset-0 z-10 flex items-start max-md:items-end justify-end max-md:justify-center md:top-[125px] lg:top-[85px] xl:top-[65px] max-w-screen'>
            <Image
              src={WITHIN_IMAGE}
              alt='Within Image'
              width={400}
              height={250}
              className='w-[300px] md:w-[450px] lg:w-[600px] xl:w-[700px] xl:h-[200px]'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero2
