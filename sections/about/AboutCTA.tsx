import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'

const AboutCTA = () => {
  return (
    <section className='my-20 pb-20'>
      <MaxWidthWrapper>
        <div className='flex flex-col'>
          <span className='block font-oswald leading-[1.05] uppercase text-5xl lg:text-6xl font-bold text-center max-w-xl mx-auto'>
            Ready to rewrite <br /> your{' '}
            <span className='text-my-primary'>story</span>?
          </span>

          <Button className='text-white mt-12 font-bold px-12 py-7 text-lg! w-fit mx-auto relative active:scale-[0.98]'>
            <div className='bg-linear-to-b from-white to-10% blur-xs to-transparent absolute inset-0 rounded-md' />
            Start the grind
            <div className='shadow-[inset_-3px_-6px_6px_0px_rgba(0,_0,_0,_0.3)] absolute inset-0' />
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default AboutCTA
