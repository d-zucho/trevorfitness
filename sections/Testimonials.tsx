import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { TESTIMONIALS } from '@/constants'

const Testimonials = () => {
  return (
    <section className='py-40'>
      <div className=''>
        <MaxWidthWrapper>
          <h2 className='text-6xl font-bold font-oswald uppercase text-white'>
            Testimonials
          </h2>
        </MaxWidthWrapper>

        <div className='w-full'>
          <InfiniteMovingCards
            items={TESTIMONIALS}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
