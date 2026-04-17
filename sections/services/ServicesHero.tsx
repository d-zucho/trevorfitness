'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const ServicesHero = () => {
  return (
    <section className='relative min-h-[calc(100vh-80px)] bg-my-bg overflow-hidden flex flex-col items-center justify-center'>
      {/* Decorative background gradient blobs */}
      <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-my-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
      <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-my-secondary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none' />

      <MaxWidthWrapper>
        <div className='flex flex-col gap-6 py-20 lg:py-0 max-w-3xl'>

          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='inline-flex items-center gap-2 self-start'
          >
            <span className='h-px w-8 bg-my-primary' />
            <span className='text-my-primary font-archivo text-sm font-semibold tracking-[0.2em] uppercase'>
              Engineered for Excellence
            </span>
          </motion.span>

          {/* Main heading */}
          <div className='overflow-hidden'>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className='font-oswald font-bold uppercase leading-[1.0] text-white text-[72px] sm:text-[96px] lg:text-[120px]'
            >
              Training <br />
              <span className='text-my-primary'>Reinvented</span>
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className='h-px w-24 bg-my-primary'
          />

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            className='text-text-secondary font-archivo tracking-wide text-base md:text-lg max-w-md'
          >
            Breaking the boundaries of conventional fitness. High-performance
            protocols designed for those who refuse to settle for average.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.65 }}
            className='flex gap-4'
          >
            <Button asChild className='font-bold px-8 py-5 text-base!'>
              <Link href='/#contact'>Get Started</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              className='font-bold px-8 py-5 text-base! border-white/20 text-white hover:bg-white/10 hover:text-white'
            >
              <Link href='/about'>Meet Trevor</Link>
            </Button>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary'
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className='w-5 h-5 text-my-primary' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesHero
