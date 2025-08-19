import { HERO_CARD_INFO } from '@/constants'
import { div } from 'motion/react-client'
import React from 'react'

const HeroCardSection = () => {
  return (
    <div>
      {HERO_CARD_INFO.map((card) => (
        <div key={card.label}>
          <h3>{card.title}</h3>
          <p>{card.label}</p>
        </div>
      ))}
    </div>
  )
}

export default HeroCardSection
