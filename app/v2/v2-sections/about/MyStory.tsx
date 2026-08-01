'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { motion, useReducedMotion } from 'motion/react'

const MyStory = () => {
  const reduce = useReducedMotion()

  return (
    <section className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid gap-14 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
              The journey
            </span>
            <h2 className='mt-5 font-oswald text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.02]'>
              My story
            </h2>

            <div className='mt-7 max-w-[58ch] space-y-5 font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
              <p>
                I did not grow up an athlete. For most of my twenties I was the
                person who signed up for a gym in January and stopped going by
                February, certain that everyone there could tell I did not
                belong.
              </p>
              <p>
                What changed was not a program or a supplement. It was one coach
                who treated me like a person instead of a project. He met me
                where I was, kept it simple, and stayed patient long enough for
                it to stick.
              </p>
              <p>
                Ten years later, that is the only kind of coaching I do. I built
                my practice for the version of me who almost never started, so
                that starting feels a little less impossible for you.
              </p>
            </div>
          </motion.div>

          {/* Philosophy pull-quote */}
          <motion.figure
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className='flex flex-col justify-center border-t border-v2-paper-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0'
          >
            <blockquote className='font-oswald text-2xl font-bold uppercase leading-[1.15] md:text-3xl'>
              The goal was never to make fitness your whole life. It is to make
              the rest of your life feel better.
            </blockquote>
            <figcaption className='mt-6 font-space-mono text-[0.7rem] uppercase tracking-[0.22em] text-my-primary'>
              The philosophy
            </figcaption>
          </motion.figure>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default MyStory
