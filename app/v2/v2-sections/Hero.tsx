'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const Hero = () => {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  }

  // One orchestrated direction: everything rises from below behind a mask.
  const rise: Variants = {
    hidden: { y: reduce ? 0 : '110%' },
    show: {
      y: '0%',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const fade: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <section className='relative bg-v2-base text-v2-ink overflow-hidden'>
      {/* Structural warm tonal shift (bottom-heavy), not a decorative blob */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_100%,#241a13_0%,transparent_60%)]'
      />

      <MaxWidthWrapper className='relative'>
        <div className='grid items-center gap-12 py-24 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-32'>
          {/* Left — the invitation */}
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='flex flex-col'
          >
            <motion.span
              variants={fade}
              className='font-space-mono text-xs uppercase tracking-[0.28em] text-my-primary'
            >
              One-on-one coaching
            </motion.span>

            <h1 className='mt-6 font-oswald font-bold uppercase leading-[0.92] text-[clamp(3.25rem,11vw,7.5rem)]'>
              <span className='block overflow-hidden'>
                <motion.span variants={rise} className='block text-my-primary'>
                  Start
                </motion.span>
              </span>
              <span className='block overflow-hidden'>
                <motion.span variants={rise} className='block'>
                  where you
                </motion.span>
              </span>
              <span className='block overflow-hidden'>
                <motion.span variants={rise} className='block'>
                  are.
                </motion.span>
              </span>
            </h1>

            {/* Ignition line — echoes the timeline rail, draws on load */}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reduce ? 0 : 0.8,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-8 h-px w-40 origin-left bg-my-primary'
            />

            <motion.p
              variants={fade}
              className='mt-8 max-w-[52ch] font-archivo text-base leading-relaxed text-v2-ink/85 md:text-lg'
            >
              You don&apos;t need to be fit to start. I meet you at square one,
              and we build from there together, one week at a time.
            </motion.p>

            <motion.div
              variants={fade}
              className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'
            >
              <Button
                asChild
                className='h-12 text-base! transition-shadow hover:shadow-[0_0_28px_rgba(244,117,33,0.35)]'
              >
                <Link href='#contact'>Book your first session</Link>
              </Button>
              <Link
                href='#first-weeks'
                className='group inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-[0.2em] text-v2-muted transition-colors hover:text-v2-ink'
              >
                See how it works
                <span className='transition-transform duration-300 group-hover:translate-y-0.5'>
                  ↓
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — a treated portrait (swap in a real photo of Trevor) */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className='relative mx-auto w-full max-w-sm lg:max-w-none'
          >
            <div className='relative aspect-[4/5] overflow-hidden rounded-md bg-v2-surface'>
              <Image
                src='/cardImg1.png'
                alt='Trevor, personal trainer'
                fill
                priority
                sizes='(max-width: 1024px) 24rem, 32rem'
                className='object-cover object-top contrast-[1.03]'
              />
              {/* Warm duotone wash so the portrait reads as brand, not stock */}
              <div
                aria-hidden
                className='absolute inset-0 mix-blend-multiply bg-[linear-gradient(180deg,rgba(13,11,10,0)_40%,rgba(13,11,10,0.85)_100%)]'
              />
              <div
                aria-hidden
                className='absolute inset-0 mix-blend-soft-light bg-my-primary/25'
              />
              {/* Contact-sheet caption strip */}
              <div className='absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-v2-ink/90'>
                <span>Trevor Woodard</span>
                <span className='text-my-primary'>Your coach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
