import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from './ui/button'

const PotentialCTA = () => {
  return (
    <div className='py-32'>
      <MaxWidthWrapper>
        {/* <h2 className='text-[92px] font-oswald  text-center mb-4 uppercase'>
          Unleash your <span className='text-my-primary'>potential</span>
        </h2> */}
        <div className='flex flex-col items-center gap-8'>
          <div className='uppercase text-4xl md:text-7xl lg:text-[92px] font-oswald flex justify-center text-center mb-2 lg:mb-2 gap-8 max-md:flex-wrap max-md:leading-[0.5]'>
            <span>Unleash</span>
            <span>your</span>
            <span className='text-my-primary'>potential</span>
          </div>
          <p className='leading-[28px] text-lg lg:text-xl text-center font-archivo max-w-xl mx-auto mb-4'>
            "Personalized fitness coaching designed to help you build strength,
            stay motivated, and achieve your goals. Let’s start your
            transformation today!"
          </p>
          <Button className=' px-16 lg:px-20 font-bold! text-'>Contact</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default PotentialCTA
