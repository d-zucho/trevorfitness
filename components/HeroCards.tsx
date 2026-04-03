'use client'
import { HERO_CARD_INFO } from '@/constants'
import HeroCard from './HeroCard'
import { motion } from 'motion/react'

const HeroCards = () => {
  return (
    <div className='w-full bottom-0 z-5 text-white'>
      <motion.div className='grid grid-cols-1 md:grid-cols-3 h-full'>
        {HERO_CARD_INFO.map((card) => (
          <HeroCard key={card.label} title={card.title} label={card.label} />
        ))}
      </motion.div>
    </div>
  )
}

export default HeroCards
