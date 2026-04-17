'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import PillarCard from '@/components/PillarCard'
import { PILLARS } from '@/constants'
import { motion } from 'motion/react'
import React from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const Pillars = () => {
  return (
    <section className='py-32'>
      <MaxWidthWrapper>
        {/* TITLE */}
        <motion.div
          className='flex flex-col items-center md:flex-row md:justify-between md:items-end'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className='font-oswald font-bold uppercase text-white text-5xl md:text-6xl leading-tight text-center md:text-left'>
            The Three <span className='text-my-primary block'>Pillars</span>
          </h2>
          <div className='uppercase text-sm text-text-secondary max-w-xs leading-relaxed text-center md:text-right mt-6'>
            Integrated performance systems for peak human potential.
          </div>
        </motion.div>

        <motion.div
          className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
        >
          {PILLARS.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Pillars
