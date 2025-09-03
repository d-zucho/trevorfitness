import HeroCards from '@/components/HeroCards'
import HomeCTA from '@/components/HomeCTA'
import HomeCTA2 from '@/components/HomeCTA2'
import OfferingScroll from '@/components/OfferingScroll'
import PotentialCTA from '@/components/PotentialCTA'
import { ABOUT_STATS } from '@/constants'
import Hero from '@/sections/Hero'
import HomeAbout from '@/sections/HomeAbout'
import HomeDetailsCards from '@/sections/HomeDetailsCards'
import OurMission from '@/sections/OurMission'
import Testimonials from '@/sections/Testimonials'

export default function Home() {
  return (
    <main className='bg-my-bg text-white'>
      <Hero />
      {/* <Hero2 /> */}

      <HeroCards />
      <HomeDetailsCards />
      <HomeCTA />

      <PotentialCTA />
      <OurMission />
      <OfferingScroll />
      <HomeCTA2 />
      <HomeAbout reverse={false} stat={ABOUT_STATS[0]} />
      <HomeAbout reverse={true} stat={ABOUT_STATS[1]} />
      <Testimonials />
    </main>
  )
}
