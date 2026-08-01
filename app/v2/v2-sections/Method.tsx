'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { MY_METHODS } from '@/constants'
import { motion, useReducedMotion } from 'motion/react'

const Method = () => {
  const reduce = useReducedMotion()

  return (
    <section className='bg-v2-base text-v2-ink'>
      <MaxWidthWrapper>
        <div className='py-24 md:py-32'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='max-w-xl'>
              <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
                My approach
              </span>
              <h2 className='mt-5 font-oswald text-[clamp(2.25rem,5vw,3.75rem)] font-bold uppercase leading-[1.02]'>
                How I train you
              </h2>
            </div>
            <p className='font-space-mono text-xs uppercase tracking-[0.14em] text-v2-muted'>
              The method behind every plan
            </p>
          </div>

          {/* Editorial rows, divided by full-width hairlines (not cards) */}
          <div className='mt-14'>
            {MY_METHODS.map((method, i) => (
              <motion.article
                key={method.title}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: reduce ? 0 : i * 0.06,
                }}
                className='group grid grid-cols-1 gap-3 border-t border-v2-line py-8 last:border-b md:grid-cols-[1fr_1.4fr] md:gap-12'
              >
                <h3 className='font-oswald text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-my-primary md:text-3xl'>
                  {method.title}
                </h3>
                <p className='max-w-[60ch] font-archivo text-base leading-relaxed text-v2-muted md:text-lg'>
                  {method.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Method
