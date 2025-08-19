import HeroCards from '@/components/HeroCards'
import HeroCTA from '@/components/HeroCTA'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import TestButton from '@/components/TestButton'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { HERO_IMAGE, WITHIN_IMAGE } from '@/constants'
import Image from 'next/image'

// xs: screens from 0px to 639px
// sm: screens from 640px to 767px
// md: screens from 768px to 1023px
// lg: screens from 1024px to 1279px
// xl: screens from 1280px to 1535px
// 2xl: screens from 1536px and up

const Hero3 = () => {
  return (
    <section className='h-[calc(100vh_-_80px)] max-h-[calc(100vh_-_80px)] relative overflow-x-hidden'>
      <div className='relative w-full h-full'>
        {/* HERO TEXT START */}
        <MaxWidthWrapper className='relative h-fit'>
          <div className='relative pt-10 z-2'>
            <Image
              className='absolute md:w-[400px] lg:w-[500] xl:w-[690px] lg:h-[200px] xl:h-[261px] top-[85px] xl:left-[375px] md:left-[275px] opacity-75'
              alt='Within'
              src={WITHIN_IMAGE}
            />

            <h1 className='text-6xl text-center md:text-[100px] lg:text-[150px] font-bold font-oswald leading-[1.2]'>
              POWER
              <br />
              FROM WITHIN
            </h1>
            <div className='-mt-12 opacity-40 transition-opacity duration-400 ease-in-out flex justify-center items-center'>
              {/* <TextHoverEffect text='WITHIN' className='' /> */}
            </div>
          </div>
        </MaxWidthWrapper>
        {/* HERO TEXT END */}

        {/* HERO IMAGE START */}
        <div className='max-w-full relative  z-1 clear-start '>
          <Image
            src={HERO_IMAGE}
            alt='Hero Image'
            className='w-full object-cover max-w-full h-[700px] saturate-100 brightness-90 -mt-17'
          />
          <HeroCTA />
        </div>
        <HeroCards />
      </div>
    </section>
  )
}

export default Hero3
