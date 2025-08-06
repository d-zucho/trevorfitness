import { HERO_CARD_INFO } from '@/constants'
import HeroCard from './HeroCard'

const HeroCards = () => {
  return (
    <div className='w-full h-[265px] absolute inset-x-0 bottom-0 z-5 text-white'>
      <div className='grid grid-cols-3 h-full'>
        {HERO_CARD_INFO.map((card) => (
          <HeroCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  )
}

export default HeroCards
