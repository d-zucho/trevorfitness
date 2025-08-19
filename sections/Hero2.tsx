'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { WITHIN_IMAGE } from '@/constants'
import Image from 'next/image'
import { motion } from 'motion/react'
import HeroCardSection from './HeroCardSection'

// xs: screens from 0px to 639px
// sm: screens from 640px to 767px
// md: screens from 768px to 1023px
// lg: screens from 1024px to 1279px
// xl: screens from 1280px to 1535px
// 2xl: screens from 1536px and up

const Hero2 = () => {
  return (
    <section className='relative h-[calc(100vh-80px)]  z-0'>
      {/* <div className='bg-[url("/hero2.png")] bg-cover bg-no-repeat bg-center h-[60vh] absolute inset-x-0 bottom-0 -z-1' /> */}

      <div className="absolute inset-x-0 h-[62vh] bottom-0 bg-[url('/hero2.png')] bg-cover bg-no-repeat bg-center" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        className='w-[300px] sm:w-[400px] absolute top-32 max-lg:left-1/2 max-lg:-translate-x-1/2 sm:top-[200px] md:top-40 lg:top-[50px] lg:left-1/2 lg:-translate-x-1/3 z-2 lg:w-[725px]'
      >
        <Image
          src={WITHIN_IMAGE}
          alt='Power from within'
          width={700}
          className='w-full'
        />
      </motion.div>
      <div className='w-full relative z-3'>
        <MaxWidthWrapper>
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='text-center text-[70px] lg:text-left font-bold lg:text-[140px] sm:text-[114px]  uppercase font-oswald leading-[1.15] whitespace-nowrap'
          >
            Power <br /> from within
          </motion.h1>
          {/* <div className='bg-white/5 w-fit rounded-lg backdrop-blur-2xl mx-auto lg:mx-0 mt-40'>
            <div className='bg-gradient-to-br from-slate-200/20 to-gray-50/5 w-fit rounded-lg backdrop-blur-md mx-auto lg:mx-0 mt-40'>
              <div className='mt-8 relative bg-black/[2%] w-fit py-8 px-4 rounded-lg backdrop-blur-2xl flex flex-col gap-6 items-start'>
                <p className='font-medium text-white/80 text-lg md:text-2xl text-center lg:text-left'>
                  Personalized training for Real Results. <br />
                  Let's get started!
                </p>
                <Button className='font-bold! px-10 py-[28px] text-base!  max-lg:w-2/3 max-lg:mx-auto '>
                  Get in touch
                </Button>
              </div>
            </div>
          </div> */}
          <div className='mt-40 flex justify-center lg:justify-start'>
            <div className='bg-gradient-to-br from-white/5 to-slate-200/10 backdrop-blur-xl rounded-lg p-8 max-w-md'>
              <p className='font-medium text-white/80 text-lg md:text-2xl text-center lg:text-left mb-6'>
                Personalized training for Real Results. <br />
                Let's get started!
              </p>
              <Button className='font-bold px-10 py-7  w-full lg:w-auto'>
                Get in touch
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className='relative'>{/* <HeroCardSection /> */}</div>
    </section>
  )
}

export default Hero2
