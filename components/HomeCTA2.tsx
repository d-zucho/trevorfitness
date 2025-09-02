import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { Button } from './ui/button'

const HomeCTA2 = () => {
  return (
    <div className='py-20'>
      <MaxWidthWrapper>
        <div className='relative py-10 px-5 overflow-clip rounded-base bg-linear-to-br from-my-gray-500 from-45% to-my-secondary/40 '>
          <Image
            src={'/dot_bg_card.svg'}
            alt=''
            width={150}
            height={100}
            className='absolute top-1 left-1 opacity-50'
          />
          {/* CARD TEXT */}
          <div className='flex items-center justify-between mx-10'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>
                Ready to take the first step to a healthier you?
              </h3>
              <p className='text-sm'>
                Let's set up your personalized fitness plan today!
              </p>
            </div>
            <Button className='relative overflow-hidden'>
              <div className='bg-linear-to-b from-white to-10% blur-xs to-transparent absolute inset-0 rounded-md' />
              <div className='bg-[linear-gradient(aa' />
              {/* <div className='absolute border-t border-l blur-[2px] inset-0'></div>
              <div className='bg-linear-to-t from-slate-900/80 to-20%  blur-[3px] to-transparent absolute inset-0 rounded-md' /> */}
              Sign Up Today
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomeCTA2
