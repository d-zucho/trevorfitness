'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { V2_TESTIMONIALS } from '@/constants'
import { motion, useReducedMotion } from 'motion/react'

// Editorial offsets so the quotes read as a spread, not a uniform grid
const SPAN = [
  'md:col-span-7',
  'md:col-span-7 md:col-start-6',
  'md:col-span-8',
]

const Proof = () => {
  const reduce = useReducedMotion()

  return (
    <section className='bg-v2-base text-v2-ink'>
      <MaxWidthWrapper>
        <div className='py-24 md:py-32'>
          <div className='max-w-2xl'>
            <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
              Proof
            </span>
            <h2 className='mt-5 font-oswald text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.02]'>
              People who started
            </h2>
            <p className='mt-6 max-w-[54ch] font-archivo text-base leading-relaxed text-v2-ink/80 md:text-lg'>
              Most of them had tried and quit before they found me. Here is what
              changed.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-8'>
            {V2_TESTIMONIALS.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`col-span-1 ${SPAN[i] ?? ''}`}
              >
                <span aria-hidden className='mb-6 block h-0.5 w-10 bg-my-primary' />
                <p className='font-archivo text-xl leading-relaxed text-v2-ink md:text-2xl md:leading-relaxed'>
                  {`“${t.message}”`}
                </p>
                <footer className='mt-6 font-space-mono text-xs uppercase tracking-[0.14em]'>
                  <span className='text-v2-ink'>{t.name}</span>
                  <span className='text-v2-muted'>{` · ${t.label}`}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Proof
