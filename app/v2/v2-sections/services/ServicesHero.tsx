'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { V2_SERVICES } from '@/constants'

const ServicesHero = () => {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 } },
  }
  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className='relative bg-v2-base text-v2-ink overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#241a13_0%,transparent_55%)]'
      />

      <MaxWidthWrapper className='relative'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex flex-col py-24 md:py-32'
        >
          <motion.span
            variants={fade}
            className='font-space-mono text-xs uppercase tracking-[0.28em] text-my-primary'
          >
            Ways to train together
          </motion.span>

          <motion.h1
            variants={fade}
            className='mt-6 max-w-4xl font-oswald font-bold uppercase leading-[0.95] text-[clamp(2.75rem,9vw,6.5rem)]'
          >
            Find the way that <span className='text-my-primary'>fits your life.</span>
          </motion.h1>

          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className='mt-8 h-px w-40 origin-left bg-my-primary'
          />

          <motion.p
            variants={fade}
            className='mt-8 max-w-[54ch] font-archivo text-base leading-relaxed text-v2-ink/85 md:text-lg'
          >
            Three ways to work with me, all built on the same thing: a plan made
            for you and a coach who is genuinely in your corner. Not sure which
            fits? That is what the first conversation is for.
          </motion.p>

          <motion.div
            variants={fade}
            className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'
          >
            <Button
              asChild
              className='h-12 text-base! transition-shadow hover:shadow-[0_0_28px_rgba(244,117,33,0.35)]'
            >
              <Link href='#contact'>Book a first session</Link>
            </Button>
            <Link
              href='#contact'
              className='font-space-mono text-xs uppercase tracking-[0.2em] text-v2-muted transition-colors hover:text-v2-ink'
            >
              Not sure which? Let&apos;s talk
            </Link>
          </motion.div>

          {/* Teaser of the three offerings */}
          <motion.ul
            variants={fade}
            className='mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-v2-line pt-6 font-space-mono text-xs uppercase tracking-[0.14em] text-v2-muted'
          >
            {V2_SERVICES.map((s, i) => (
              <li key={s.title} className='flex items-center gap-6'>
                {i > 0 && (
                  <span aria-hidden className='text-my-primary'>
                    /
                  </span>
                )}
                {s.title}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ServicesHero
