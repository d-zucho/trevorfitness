import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { CREDENTIALS_INFO } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Credentials = () => {
  return (
    <section className='py-20 lg:py-32 bg-my-bg relative overflow-hidden'>
      <MaxWidthWrapper>
        <div>
          <h2 className='font-oswald font-bold uppercase text-white text-4xl md:text-5xl leading-tight'>
            My Credentials
          </h2>
          <div className='flex items-end'>
            <p className='text-text-secondary tracking-wide leading-relaxed mt-6'>
              Certified to deliver real-world results you can feel and see.
            </p>
            <div className='block h-px w-full bg-card-bg' />
          </div>
        </div>

        <div className='mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {CREDENTIALS_INFO.map((credential, index) => (
            <Card
              key={index}
              className='bg-card-bg flex flex-col items-center hover:border-my-primary/40 transition-all duration-400 hover:scale-102 hover:shadow-lg shadow-my-primary/10'
            >
              <div>
                <Image
                  src={credential.image}
                  width={48}
                  height={48}
                  alt={credential.title}
                />
              </div>
              <CardTitle className='text-2xl'>{credential.title}</CardTitle>
              <CardDescription className='uppercase tracking-wide text-center'>
                {credential.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Credentials
