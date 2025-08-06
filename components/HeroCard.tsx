import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'

interface HeroCardProps {
  title: string
  label: string
}

const HeroCard = ({ title, label }: HeroCardProps) => {
  return (
    <div className='p-8 bg-my-hero-card-bg h-full flex flex-col justify-between'>
      <div className='flex flex-col gap-1'>
        <span className='uppercase font-archivo font-semibold text-my-secondary text-lg tracking-[5]'>
          {label}
        </span>
        <h4 className='font-oswald text-[36px] uppercase'>{title}</h4>
      </div>
      <div className='overflow-clip'>
        <div className='relative flex justify-between items-center w-fit overflow-clip group'>
          <Link
            href='/'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'flex justify-between items-center w-fit uppercase tracking-widest hover:bg-transparent hover:text-white group relative'
            )}
          >
            Get started
            <ArrowRight className='text-my-secondary' />
          </Link>
          <div
            className={
              'w-[75%] h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-2 transition-all duration-400'
            }
          ></div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
