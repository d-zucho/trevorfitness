'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { WITHIN_IMAGE } from '@/constants'
import Image from 'next/image'
import { motion } from 'motion/react'

const Hero2 = () => {
  return (
    <section className='relative h-[calc(100vh-80px)] z-0'>
      <div className="absolute inset-x-0 h-[62vh] bottom-0 bg-[url('/hero2.png')] bg-cover bg-no-repeat bg-center -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
        className='w-[300px] sm:w-[400px] absolute top-32 max-lg:left-1/2 max-lg:-translate-x-1/2 sm:top-[200px] md:top-40 lg:top-[50px] lg:left-1/2 lg:-translate-x-1/3 z-10 lg:w-[725px]'
      >
        <Image
          src={WITHIN_IMAGE}
          alt='Power from within'
          width={700}
          className='w-full'
        />
      </motion.div>

      <div className='w-full relative z-20'>
        <MaxWidthWrapper>
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className='text-center text-[70px] lg:text-left font-bold lg:text-[140px] sm:text-[114px] uppercase font-oswald leading-[1.15] whitespace-nowrap'
          >
            Power <br /> from within
          </motion.h1>

          <div className='mt-32 flex justify-center lg:justify-start'>
            <div className='bg-gradient-to-br from-white/5 to-slate-200/10 backdrop-blur-xl rounded-lg p-8 max-w-md'>
              {/* @ignore */}
              <p className='font-medium text-white/80 text-lg md:text-2xl text-center lg:text-left mb-6'>
                Personalized training for Real Results. <br />
                Let's get started!
              </p>
              <Button className='font-bold px-10 py-5 w-full lg:w-auto text-base!'>
                Get in touch
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default Hero2
