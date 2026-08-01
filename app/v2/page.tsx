import Hero from '@/app/v2/v2-sections/Hero'
import MeetTrevor from '@/app/v2/v2-sections/MeetTrevor'
import FirstWeeks from '@/app/v2/v2-sections/FirstWeeks'
import Method from '@/app/v2/v2-sections/Method'
import Proof from '@/app/v2/v2-sections/Proof'
import Invitation from '@/app/v2/v2-sections/Invitation'

// Homepage design v2 — "In Your Corner". `/` stays untouched.
export default function HomeV2() {
  return (
    <main className='bg-v2-base text-v2-ink'>
      <Hero />
      <MeetTrevor />
      <FirstWeeks />
      <Method />
      <Proof />
      <Invitation />
    </main>
  )
}
