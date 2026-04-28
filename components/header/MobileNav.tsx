'use client'
import { ChevronRight, Menu } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { MOBILE_NAV_LINKS, SOCIALS } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '../ui/button'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label='Open navigation menu'
            className='text-white hover:text-my-primary transition-colors duration-200'
          >
            <Menu size={24} aria-hidden='true' />
          </button>
        </SheetTrigger>
        <SheetContent className='bg-my-bg'>
          <SheetHeader className='sr-only'>
            <SheetTitle>Trevor Woodard</SheetTitle>
            <SheetDescription>
              Get individualized fitness plans to meet your needs
            </SheetDescription>
          </SheetHeader>

          <div className='p-5'>
            <div className='p-2 bg-my-primary flex items-center justify-center w-fit rounded-md'>
              TW
            </div>
            <div className='flex flex-col gap-5 mt-12'>
              {MOBILE_NAV_LINKS.map(({ label, href }) => (
                <SheetClose key={label} asChild className=''>
                  <Link
                    href={href}
                    className={buttonVariants({
                      variant: 'ghost',
                      // size: 'lg',
                      className:
                        'w-full font-semibold py-6 text-lg! justify-start hover:bg-my-primary! transition-all duration-300',
                    })}
                  >
                    <span>{label}</span>
                    <ChevronRight size={16} className='ml-auto' />
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className='flex flex-col gap-4 mt-12'>
              <Link
                href={'/contact'}
                className={buttonVariants({
                  variant: 'outline',
                  className: 'py-6 text-lg! hover:scale-102',
                })}
              >
                Contact Me
              </Link>
              <Link
                href={'/contact'}
                className={buttonVariants({
                  variant: 'default',
                  className:
                    'py-6 text-lg! hover:scale-102 hover:border-border hover:border-2',
                })}
              >
                Book Free Consultation
              </Link>
            </div>

            <div className='flex gap-3 items-center justify-center mt-12'>
              {/* Social Links */}

              {SOCIALS.map((social) => (
                <div
                  key={social.label}
                  className='p-2 rounded-full bg-muted w-fit border-2 border-border hover:border-my-primary transition-colors duration-300'
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
                      className='text-white'
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className='text-center mt-5'>
              <span className='text-muted-foreground/50'>
                &copy; 2026 Trevor Woodard
              </span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
