import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Button as BorderButton } from '@/components/ui/moving-border'
import { MovingBorder } from '@/components/ui/moving-border'
import React from 'react'

const OurMission = () => {
  return (
    <section className='py-20'>
      <MaxWidthWrapper>
        {/* <div className='h-10 w-40 bg-transparent bg-linear-[to_bottom_right,transparent_-10%,#D74D49_80%,transparent]'> */}
        <div className='relative z-0 w-fit bg-my-primary/10 border-2 border-my-primary/5 rounded-md px-8 py-4'>
          {/* <div className='absolute inset-0 -z-20 bg-white/20' /> */}
          <div className='absolute -z-10 inset-0 bg-gradient-to-br from-transparent via-[#f47521]/80 to-transparent blur-xs rounded-md'></div>
          <span className='text-[20px] z-10'>Our Mission</span>
        </div>

        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-my-primary'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f47521_0%,#222_0%,#f47521_100%)]' />
          <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-2xl font-medium text-white backdrop-blur-3xl'>
            Our Mission
          </span>
        </button>
        <div className='flex flex-col gap-5'>
          <h3 className='text-4xl'>Empower Your Journey to a Healthier You</h3>
          <p className='text-my-off-white'>
            At FitFusion Gym, our mission is to empower individuals of all ages
            and fitness levels to embark on a transformative journey towards a
            healthier and happier life. We believe that fitness goes beyond
            physical appearance; it's about enhancing overall well-being,
            boosting confidence, and unleashing your full potential
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
// my-primary = #D74D49
// my-secondary = #393BB2
export default OurMission
