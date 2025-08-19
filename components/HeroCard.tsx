import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'

interface HeroCardProps {
  title: string
  label: string
}

const HeroCard = ({ title, label }: HeroCardProps) => {
  return (
    // <motion.div
    //   whileHover={{ backgroundColor: '#373737' }}
    //   transition={{ duration: 0.3, ease: 'easeInOut' }}
    //   className='p-8 bg-my-hero-card-bg h-full flex flex-col justify-between'
    // >
    <div className='p-8 bg-my-hero-card-bg h-full flex flex-col justify-between max-lg:items-center hover:bg-[#373737] transition-all duration-500 ease-in-out group'>
      <div className='flex flex-col gap-1'>
        <span className='uppercase font-archivo font-semibold text-my-secondary text-lg tracking-[5] max-lg:text-center'>
          {label}
        </span>
        <h4 className='font-oswald text-[36px] uppercase'>{title}</h4>
      </div>
      <div className='overflow-clip'>
        <div className='relative flex justify-between max-lg:items-center w-fit overflow-clip group max-lg:mt-8'>
          <Link
            href='/'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'flex justify-between items-center w-fit uppercase tracking-widest hover:bg-transparent hover:text-white relative font-archivo pl-0!'
            )}
          >
            Get started
            <ArrowRight className='text-my-secondary group-hover:text-my-primary' />
          </Link>
          <div
            className={
              'w-[75%] h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:left-0 transition-all duration-400'
            }
          ></div>
        </div>
      </div>
    </div>
    // </motion.div>
  )
}

export default HeroCard
