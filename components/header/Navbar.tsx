'use client'
import Image from 'next/image'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <header className='text-white h-[80px] z-10 relative bg-my-bg/40 backdrop-blur-2xl'>
      <MaxWidthWrapper>
        <nav className='py-5 flex items-center justify-between'>
          {/* logo */}
          <Link href='/' className=''>
            <Image src={'/logo.svg'} alt='Logo' width={75} height={50} />
          </Link>

          {/* nav items */}
          <div className='hidden md:flex items-center gap-5'>
            {NAV_LINKS.map(({ label, href }) => (
              <div key={label} className='w-fit relative group overflow-clip'>
                <Link href={href}>{label}</Link>
                <div
                  className={
                    'w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'
                  }
                ></div>
              </div>
            ))}
          </div>

          {/* contact button */}
          <Button variant='default' className='px-8 hidden md:block'>
            Contact
          </Button>
          <div className='md:hidden'>
            <MobileNav />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  )
}

export default Navbar
