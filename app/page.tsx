import HeroCards from '@/components/HeroCards'
import HomeCTA from '@/components/HomeCTA'
import PotentialCTA from '@/components/PotentialCTA'
import Hero from '@/sections/Hero'
import Hero2 from '@/sections/Hero2'
import Hero3 from '@/sections/Hero3'
import HeroCardSection from '@/sections/HeroCardSection'
import HomeDetailsCards from '@/sections/HomeDetailsCards'
import OurMission from '@/sections/OurMission'
import OurMissionSection from '@/sections/OurMissionSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-my-bg text-white'>
      <Hero />
      {/* <Hero2 /> */}

      <HeroCards />
      <HomeDetailsCards />
      <HomeCTA />
      <OurMissionSection />
      <PotentialCTA />
      <OurMission />
    </main>
  )
}
