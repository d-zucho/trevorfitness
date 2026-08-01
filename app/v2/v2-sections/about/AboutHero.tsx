'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const AboutHero = () => {
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
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,#241a13_0%,transparent_55%)]'
      />

      <MaxWidthWrapper className='relative'>
        <div className='grid items-center gap-12 py-24 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16'>
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='relative order-last mx-auto w-full max-w-sm lg:order-first lg:max-w-none'
          >
            <div className='relative aspect-[4/5] overflow-hidden rounded-md bg-v2-surface'>
              <Image
                src='/cardImg1.png'
                alt='Trevor, personal trainer'
                fill
                priority
                sizes='(max-width: 1024px) 24rem, 28rem'
                className='object-cover object-top contrast-[1.03]'
              />
              <div
                aria-hidden
                className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent'
              />
              <div className='absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 font-space-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/90'>
                <span>Trevor Woodard</span>
                <span className='text-my-primary'>Est. 2016</span>
              </div>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div variants={container} initial='hidden' animate='show'>
            <motion.span
              variants={fade}
              className='font-space-mono text-xs uppercase tracking-[0.28em] text-my-primary'
            >
              About your coach
            </motion.span>

            <motion.h1
              variants={fade}
              className='mt-6 font-oswald font-bold uppercase leading-[0.95] text-[clamp(2.75rem,8vw,5.5rem)]'
            >
              The coach in <span className='text-my-primary'>your corner.</span>
            </motion.h1>

            <motion.p
              variants={fade}
              className='mt-7 max-w-[54ch] font-archivo text-base leading-relaxed text-v2-ink/85 md:text-lg'
            >
              I&apos;m Trevor. For ten years I&apos;ve helped people who felt out
              of place in a gym become people who feel at home in one. No
              transformation is too small to start, and you never do it alone.
            </motion.p>

            <motion.div variants={fade} className='mt-9'>
              <Button
                asChild
                className='h-12 text-base! transition-shadow hover:shadow-[0_0_28px_rgba(244,117,33,0.35)]'
              >
                <Link href='#contact'>Work with me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutHero
