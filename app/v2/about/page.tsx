import AboutHero from '@/app/v2/v2-sections/about/AboutHero'
import MyStory from '@/app/v2/v2-sections/about/MyStory'
import Principles from '@/app/v2/v2-sections/about/Principles'
import Credentials from '@/app/v2/v2-sections/about/Credentials'
import Method from '@/app/v2/v2-sections/Method'
import Invitation from '@/app/v2/v2-sections/Invitation'

// About page design v2 — "In Your Corner". `/about` stays untouched.
export default function AboutV2() {
  return (
    <main className='bg-v2-base text-v2-ink'>
      <AboutHero />
      <MyStory />
      <Principles />
      <Method />
      <Credentials />
      <Invitation />
    </main>
  )
}
