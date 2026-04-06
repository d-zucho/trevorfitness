'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { motion } from 'motion/react'

const AboutSection = () => {
  return (
    <section className='py-20 lg:py-32 bg-my-bg relative overflow-hidden'>
      {/* Subtle background accent */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-my-primary/5 rounded-full blur-[120px] pointer-events-none' />

      <MaxWidthWrapper>
        {/* Section top divider */}
        <div className='flex justify-center mb-16'>
          <span className='h-px w-16 bg-my-primary block' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left — My Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='flex flex-col gap-6'
          >
            {/* Eyebrow */}
            <span className='flex items-center gap-3 self-start'>
              <span className='h-px w-8 bg-my-primary' />
              <span className='text-my-primary font-archivo text-sm font-semibold tracking-[0.2em] uppercase'>
                The Journey
              </span>
            </span>

            <h2 className='font-oswald font-bold uppercase text-white text-5xl md:text-6xl leading-tight'>
              My Story
            </h2>

            <div className='flex flex-col gap-4 text-text-secondary font-archivo tracking-wide leading-relaxed'>
              <p>
                My journey didn't start in a high-end athletic facility. It
                started in a rusted garage with a pair of mismatched dumbbells
                and a relentless drive to be more than average. I wasn't born an
                athlete; I was forged through years of failure and discipline.
              </p>
              <p>
                After a career-ending injury in collegiate sports, I had to
                rediscover what it meant to be strong. It wasn't about the
                numbers on the bar, but the mental fortitude to show up when
                everything in you wants to quit. That realization became the
                cornerstone of Kinetic Athletics.
              </p>
            </div>
          </motion.div>

          {/* Right — Philosophy quote card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className='relative'
          >
            {/* Decorative border offset */}
            <div className='absolute -top-3 -right-3 inset-0 border border-my-primary/20 rounded-xl pointer-events-none' />

            <div className='bg-my-gray-700 rounded-xl p-8 md:p-10 relative'>
              {/* Large quote number */}
              <span className='font-oswald font-bold text-my-primary text-7xl leading-none select-none'>
                99
              </span>

              {/* Quote */}
              <blockquote className='mt-4 text-white font-oswald font-bold text-xl md:text-2xl leading-snug'>
                &ldquo;Fitness is not a destination. It&apos;s a violent
                commitment to continuous improvement. If it doesn&apos;t
                challenge you, it doesn&apos;t change you.&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className='flex items-center gap-4 mt-8'>
                <span className='h-px w-10 bg-my-primary block shrink-0' />
                <span className='text-text-secondary font-archivo text-xs font-semibold tracking-[0.2em] uppercase'>
                  The Philosophy
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section bottom divider */}
        <div className='flex justify-center mt-16'>
          <span className='h-px w-16 bg-my-primary/40 block' />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutSection
