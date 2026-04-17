'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { MY_METHODS } from '@/constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, type Variants } from 'motion/react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 },
  }),
}

const Methods = () => {
  return (
    <section className='py-20 lg:py-32 bg-my-bg relative z-0'>
      {/* Subtle background accent */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-my-primary/10 rounded-full blur-[120px] pointer-events-none z-10' />
      <MaxWidthWrapper>
        {/* section top divider */}
        <motion.span
          className='h-px w-16 bg-my-primary block mx-auto my-20'
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <div className='flex gap-6 flex-col-reverse lg:flex-row items-center z-20 relative'>
          <motion.div
            className='overflow-clip max-w-full flex-1 relative aspect-3/4 max-h-[700px]'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Image
              src={'/cardImg1.png'}
              alt='Methods'
              fill
              className='rounded-xl object-cover object-bottom max-w-full'
            />
          </motion.div>

          <div className='flex-1'>
            <motion.h2
              className='font-oswald font-bold uppercase text-white text-4xl md:text-5xl leading-tight mb-6'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              My <span className='text-my-primary'>Methods</span>
            </motion.h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-6'>
              {MY_METHODS.map(({ title, description }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={fadeUp}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  <Card className='bg-card-bg gap-2 hover:border-my-primary/40 transition-colors duration-300'>
                    <CardHeader>
                      <CardTitle className='text-xl'>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-text-secondary tracking-wide leading-relaxed'>
                      {description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className='py-20'>
          <motion.span
            className='h-px w-16 bg-my-primary block mx-auto y-20'
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Methods
