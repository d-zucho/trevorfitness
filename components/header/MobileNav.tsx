'use client'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className='size-10 text-white cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='bg-my-bg text-white/80 w-[300px] pl-5 border-white/10'>
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>TrevorFitness</SheetTitle>
              <SheetDescription>
                Your fitness journey starts here
              </SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className='flex flex-col items-start gap-8 mt-4'>
            {NAV_LINKS.map(({ label, href }) => (
              <div key={label} className='w-fit relative group overflow-clip'>
                <SheetClose asChild>
                  {/* <div className='relative group overflow-clip'>
                    <Link href={href} className='text-2xl'>
                      {label}
                    </Link>
                    <span
                      className={
                        'w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400'
                      }
                    />
                  </div> */}
                  <Link href={href} className='text-2xl'>
                    {label}
                  </Link>
                </SheetClose>
                <span className='w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 group-hover:right-0 transition-all duration-400' />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
