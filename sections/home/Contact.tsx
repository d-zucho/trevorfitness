import ContactForm from '@/components/ContactForm'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CONTACT_INFO } from '@/constants'

const ContactSection = () => {
  return (
    <section id='contact' className='py-20 bg-muted-bg'>
      <MaxWidthWrapper>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <h2 className='max-sm:text-center text-3xl sm:text-4xl md:text-5xl font-bold font-oswald uppercase'>
              Let's Get Started
            </h2>
            <p className='text-my-off-white my-4 max-sm:text-center max-sm:max-w-sm max-sm:mx-auto'>
              Ready to make a change? Fill out the form and I'll get back to you
              withing 24 hours to schedule your free consutlation
            </p>

            <div className='flex-col gap-4 mt-10 hidden sm:flex'>
              {CONTACT_INFO.map(({ icon, text }) => {
                const Icon = icon
                return (
                  <div key={text} className='flex gap-2 items-center'>
                    <Icon className='text-my-primary size-5' />
                    <span className='text-sm text-white/80'>{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
        <div className='flex-col gap-4 mt-20 flex items-center sm:hidden'>
          {CONTACT_INFO.map(({ icon, text }) => {
            const Icon = icon
            return (
              <div key={text} className='flex gap-2 items-center'>
                <Icon className='text-my-primary size-4' />
                <span className='text-sm text-white/80'>{text}</span>
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default ContactSection
