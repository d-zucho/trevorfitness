import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'

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
    <div className='p-8 bg-my-hero-card-bg  flex flex-col justify-between max-lg:items-center hover:bg-[#373737] transition-all duration-500 ease-in-out hover:cursor-pointer h-64'>
      <div className='flex flex-col gap-1'>
        <span className='uppercase font-archivo font-semibold text-my-primary text-lg tracking-[5] max-lg:text-center'>
          {label}
        </span>
        <h4 className='font-oswald text-[36px] uppercase'>{title}</h4>
      </div>
      <div className='w-full'>
       
        <div className='flex justify-between items-center'>
          <Button
            variant={'ghost'}
            className='text-my-off-white hover:bg-transparent hover:text-white justify-between relative uppercase tracking-widest font-archivo px-1 overflow-clip group'
          >
            Get Started
            <span
              className={
                'w-full h-0.5 rounded-full bg-my-primary absolute bottom-0 -left-full group-hover:-left-1 transition-all duration-400'
              }
            ></span>
          </Button>
          <ArrowRight className='text-my-primary size-5' />
        </div>
      </div>
    </div>
    // </motion.div>
  )
}

export default HeroCard
