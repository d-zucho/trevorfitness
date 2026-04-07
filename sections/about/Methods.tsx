import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { motion } from 'motion/react'
import { MY_METHODS } from '@/constants'
import { div } from 'motion/react-client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Methods = () => {
  return (
    <section className='py-20 lg:py-32 bg-my-bg relative overflow-hidden z-0'>
      {/* Subtle background accent */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-my-primary/10 rounded-full blur-[120px] pointer-events-none z-10' />
      <MaxWidthWrapper>
        {/* section top divider */}
        <span className='h-px w-16 bg-my-primary block mx-auto my-20' />
        <div className='flex gap-6 flex-col-reverse md:flex-row items-center z-20 relative'>
          <div className='overflow-clip max-w-full flex-1 relative aspect-3/4'>
            <Image
              src={'/cardImg1.png'}
              alt='Methods'
              fill
              className='rounded-xl object-cover object-top max-w-full'
            />
          </div>

          <div className='flex-1'>
            <h2 className='font-oswald font-bold uppercase text-white text-4xl md:text-5xl leading-tight mb-6'>
              My <span className='text-my-primary'>Methods</span>
            </h2>

            <div className='grid xl:grid-cols-2 gap-6'>
              {MY_METHODS.map(({ title, description }) => (
                <Card key={title} className='bg-card-bg'>
                  <CardHeader>
                    <CardTitle className='text-xl'>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className='text-text-secondary tracking-wide leading-relaxed'>
                    {description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <span className='h-px w-16 bg-my-primary block mx-auto my-20' />
      </MaxWidthWrapper>
    </section>
  )
}

export default Methods
