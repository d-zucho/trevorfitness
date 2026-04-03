import Image from 'next/image'
import Link from 'next/link'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='bg-my-bg border-t border-white/10'>
      <MaxWidthWrapper className='py-16 lg:py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 max-sm:justify-items-center gap-10 lg:gap-16'>
          {/* Column 1: Brand */}
          <div className='flex flex-col gap-4 max-sm:items-center'>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='Trevor Woodard'
                width={90}
                height={60}
              />
            </Link>
            <p className='text-my-off-white text-sm leading-relaxed max-sm:text-center max-w-xs'>
              Empowering individuals to achieve their fitness goals through
              personalized coaching and support.
            </p>
            <div className='flex gap-3 items-center '>
              {SOCIALS.map((social) => (
                <div
                  key={social.label}
                  className='p-2 rounded-full bg-muted-foreground/20 w-fit border-2 border-border hover:border-my-primary transition-colors duration-300'
                >
                  <Link
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className='flex flex-col gap-4 items-center sm:items-end'>
            <h3 className='font-oswald uppercase text-white text-lg font-bold tracking-wider'>
              Quick Links
            </h3>
            <nav className='flex flex-col gap-3 items-center sm:items-end'>
              {NAV_LINKS.map(({ label, href }) => (
                <div key={label} className='w-fit relative group overflow-clip'>
                  <Link href={href} className='text-my-off-white'>
                    {label}
                  </Link>
                  <div className='w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400' />
                </div>
              ))}
            </nav>
          </div>

          {/* Column 3: CTA */}
          {/* <div className='flex flex-col gap-4'>
            <h3 className='font-oswald uppercase text-white text-lg font-bold tracking-wider'>
              Start Your Journey
            </h3>
            <p className='text-my-off-white text-sm leading-relaxed'>
              Ready to transform your life? Book a free consultation and
              let&apos;s build a plan tailored to you.
            </p>
            <Button className='w-fit py-5 font-bold'>
              Book Free Consultation
            </Button>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className='mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-sm text-text-secondary text-right'>
            &copy; 2026 Trevor Woodard. All rights reserved.
          </p>
          <p className='text-sm text-text-secondary'>
            Built with passion for fitness.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
