'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import Link from 'next/link'

const ServicesCTA = () => {
  return (
    <section className='relative overflow-hidden bg-my-gray-500 my-20'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/services-cta-bg.png')" }}
      />
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/85' />

      <div className='relative z-10 flex flex-col items-center justify-center py-32 px-4 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='font-oswald font-bold uppercase leading-[1.05] text-white text-5xl sm:text-6xl lg:text-7xl'
        >
          Ready to start <br /> your{' '}
          <span className='text-my-primary'>transformation?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Button
            asChild
            className='mt-10 font-bold px-12 py-7 text-lg! relative active:scale-[0.98]'
          >
            <Link href='/#contact'>
              <div className='bg-linear-to-b from-white to-10% blur-xs to-transparent absolute inset-0 rounded-md' />
              Book Now
              <div className='shadow-[inset_-3px_-6px_6px_0px_rgba(0,_0,_0,_0.3)] absolute inset-0' />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesCTA
