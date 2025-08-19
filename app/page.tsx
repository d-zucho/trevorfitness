import HeroCards from '@/components/HeroCards'
import Hero from '@/sections/Hero'
import Hero2 from '@/sections/Hero2'
import Hero3 from '@/sections/Hero3'
import HeroCardSection from '@/sections/HeroCardSection'
import HomeDetailsCards from '@/sections/HomeDetailsCards'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-my-bg text-white'>
      <Hero />
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}

      <HeroCards />
      <HomeDetailsCards />
    </main>
  )
}
