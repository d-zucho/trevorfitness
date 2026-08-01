import ServicesHero from '@/app/v2/v2-sections/services/ServicesHero'
import Offerings from '@/app/v2/v2-sections/services/Offerings'
import Included from '@/app/v2/v2-sections/services/Included'
import Proof from '@/app/v2/v2-sections/Proof'
import Invitation from '@/app/v2/v2-sections/Invitation'

// Services page design v2 — "In Your Corner". `/services` stays untouched.
export default function ServicesV2() {
  return (
    <main className='bg-v2-base text-v2-ink'>
      <ServicesHero />
      <Offerings />
      <Included />
      <Proof />
      <Invitation />
    </main>
  )
}
