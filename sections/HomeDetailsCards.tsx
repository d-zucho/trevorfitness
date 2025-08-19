import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { DETAIL_CARDS } from '@/constants'
import { ArrowRight } from 'lucide-react'
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import HeroCardSection from './HeroCardSection'

const HomeDetailsCards = () => {
  return (
    <section className='relative'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:justify-between justify-items-center'>
          {DETAIL_CARDS.map((card) => (
            <div
              key={card.label}
              className='relative w-[200px] lg:w-full last:col-span-2'
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={300}
                height={500}
                className='lg:w-[300px]'
              />
              <div className='bg-my-off-white w-full py-5 px-10 flex justify-between'>
                <h3 className='text-base font-bold uppercase text-center text-card-title'>
                  {card.label}
                </h3>
                <ArrowRight className='text-card-title' />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeDetailsCards
