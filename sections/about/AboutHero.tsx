'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

const AboutHero = () => {
  return (
    <section className='relative min-h-[calc(100vh-80px)] bg-my-bg overflow-hidden flex items-center'>
      {/* Decorative background gradient blobs */}
      <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-my-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none' />
      <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-my-secondary/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none' />

      <MaxWidthWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center py-20 lg:py-0'>

          {/* Left — Text content */}
          <div className='flex flex-col gap-6 text-center lg:text-left z-10'>
            {/* Eyebrow label */}
            <motion.span
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='inline-flex items-center gap-2 self-center lg:self-start'
            >
              <span className='h-px w-8 bg-my-primary' />
              <span className='text-my-primary font-archivo text-sm font-semibold tracking-[0.2em] uppercase'>
                Personal Trainer
              </span>
              <span className='h-px w-8 bg-my-primary' />
            </motion.span>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className='font-oswald font-bold uppercase leading-[1.05] text-white text-[64px] sm:text-[80px] lg:text-[100px]'
            >
              Meet <br />
              <span className='text-my-primary'>Trevor</span>
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className='text-text-secondary font-archivo tracking-wide text-base md:text-lg max-w-md mx-auto lg:mx-0'
            >
              10+ years transforming lives through personalized coaching,
              evidence-based programming, and an unwavering commitment to your
              success.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
              className='flex gap-4 justify-center lg:justify-start'
            >
              {[
                { stat: '2000+', label: 'Clients Trained' },
                { stat: '10+', label: 'Years Experience' },
                { stat: '15+', label: 'Years in Fitness' },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className='flex flex-col items-center lg:items-start bg-my-gray-700 rounded-lg px-4 py-3 flex-1'
                >
                  <span className='font-oswald font-bold text-my-primary text-3xl'>
                    {stat}
                  </span>
                  <span className='text-text-secondary text-xs tracking-wide text-center lg:text-left'>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              className='flex gap-4 justify-center lg:justify-start'
            >
              <Button asChild className='font-bold px-8 py-5 text-base!'>
                <Link href='/#contact'>Work With Me</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                className='font-bold px-8 py-5 text-base! border-white/20 text-white hover:bg-white/10 hover:text-white'
              >
                <Link href='/services'>View Services</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className='relative flex justify-center lg:justify-end z-10'
          >
            {/* Decorative orange ring behind image */}
            <div className='absolute -top-6 -right-6 w-[340px] h-[420px] lg:w-[420px] lg:h-[520px] rounded-2xl border border-my-primary/30' />

            <div className='relative w-[300px] h-[380px] sm:w-[360px] sm:h-[450px] lg:w-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/about1.png'
                alt='Trevor Woodard — Personal Trainer'
                fill
                className='object-cover object-top'
                priority
              />
              {/* Bottom gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-my-bg/60 via-transparent to-transparent' />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              className='absolute bottom-8 -left-4 lg:-left-12 bg-gradient-to-br from-white/10 to-slate-200/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 shadow-xl'
            >
              <p className='font-oswald font-bold text-white text-lg uppercase'>
                ACE &middot; NASM &middot; CN
              </p>
              <p className='text-text-secondary text-xs tracking-wide mt-0.5'>
                Certified &amp; Accredited
              </p>
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero
