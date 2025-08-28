import React from 'react'
import MissionCard from './MissionCard'
import { MISSION_CARDS } from '@/constants'
import { HoverEffect } from './ui/card-hover-effect'

const MissionCards = () => {
  return (
    <div>
      <div className=''>
        {/* {MISSION_CARDS.map((card, index) => (
          <MissionCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))} */}
        <HoverEffect items={MISSION_CARDS} />
      </div>
    </div>
  )
}

export default MissionCards
