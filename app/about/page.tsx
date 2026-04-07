import AboutHero from '@/sections/about/AboutHero'
import AboutSection from '@/sections/about/AboutSection'
import Credentials from '@/sections/about/Credentials'
import Methods from '@/sections/about/Methods'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <Credentials />
      <Methods />
    </div>
  )
}

export default AboutPage
