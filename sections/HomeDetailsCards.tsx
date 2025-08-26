import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { DETAIL_CARDS } from '@/constants'
import { ArrowRight } from 'lucide-react'
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'
import HeroCardSection from './HeroCardSection'

const HomeDetailsCards = () => {
  return (
    <section className='relative overflow-hidden py-[100px]'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 gap-4  justify-items-center '>
          {DETAIL_CARDS.map((card) => (
            <div
              key={card.label}
              className='relative w-[200px] lg:w-full hover:scale-[102%] transition-all duration-300 ease-in-out rounded-lg  md:h-full'
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={300}
                height={400}
                className='  lg:w-[300px]'
              />
              <div className='bg-my-off-white w-full h-[90px] px-8 flex items-center justify-between max-w-[300px]'>
                <h3 className='text-base font-bold lg:text-xl uppercase text-center text-card-title'>
                  {card.label}
                </h3>
                <ArrowRight className='text-card-title shrink-0 sm:size-5' />
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default HomeDetailsCards
