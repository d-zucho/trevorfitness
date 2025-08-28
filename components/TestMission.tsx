import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { MISSION_CARDS } from '@/constants'
import { HoverEffect } from './ui/card-hover-effect'

const TestMission = () => {
  const cards = [
    {
      title: 'Inclusive Community',
      description:
        'Embracing Diversity, Fostering Belonging At FitFusion Gym, we celebrate the beauty of diversity.',
      icon: '/icons/users.svg',
    },
    {
      title: 'Expert Guidance',
      description:
        "We understand that each person's fitness journey is unique.",
      icon: '/icons/grad_hat.svg',
    },
    {
      title: 'Diverse Fitness Offerings',
      description:
        'At FitFusion, we believe in the power of diversity when it comes to fitness.',
      icon: '/icons/twinkle.svg',
    },
    {
      title: 'State-of-the-Art Approach',
      description:
        'To support your fitness aspirations, we invest in state-of-the-art equipment and facilities.',
      icon: '/icons/star.svg',
    },
    {
      title: 'Fun and Motivation',
      description:
        'We firmly believe that fitness should be enjoyable and motivational.',
      icon: '/icons/sun.svg',
    },
    {
      title: 'Embracing Challenges',
      description:
        'Our mission involves challenging our members to push their boundaries, step outside their comfort zones.',
      icon: '/icons/bars.svg',
    },
  ]
  return (
    <div>
      <MaxWidthWrapper>
        <div className='relative z-0'>
          <HoverEffect items={cards} />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default TestMission
