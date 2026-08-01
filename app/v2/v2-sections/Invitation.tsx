'use client'

import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CONTACT_INFO } from '@/constants'
import { motion, useReducedMotion } from 'motion/react'

const Invitation = () => {
  const reduce = useReducedMotion()

  return (
    <section id='contact' className='bg-v2-paper text-v2-paper-ink'>
      <MaxWidthWrapper>
        <div className='grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20'>
          {/* The invitation */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className='font-space-mono text-xs uppercase tracking-[0.24em] text-my-primary'>
              The first step
            </span>
            <h2 className='mt-5 font-oswald text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.98]'>
              Let&apos;s talk first.
            </h2>
            <p className='mt-6 max-w-[50ch] font-archivo text-base leading-relaxed text-v2-paper-muted md:text-lg'>
              No commitment, no sales pitch. Tell me where you are starting and I
              will be honest about whether I can help.
            </p>

            <ul className='mt-10 space-y-6'>
              {CONTACT_INFO.map(({ icon: Icon, label, text }) => (
                <li key={text} className='flex items-start gap-4'>
                  <Icon className='mt-0.5 size-5 shrink-0 text-my-primary' />
                  <div>
                    {label && (
                      <p className='font-space-mono text-[0.7rem] uppercase tracking-[0.16em] text-v2-paper-muted'>
                        {label}
                      </p>
                    )}
                    <p className='font-archivo text-base text-v2-paper-ink'>
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The dark form card sits as a deliberate object on the warm paper */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className='w-full lg:justify-self-end'
          >
            <ContactForm />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Invitation
