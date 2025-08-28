import { TMissionCard } from '@/lib/types'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MissionCard = ({ title, description, icon }: TMissionCard) => {
  return (
    <div className='flex flex-col h-full bg-[#18181B] relative p-10 rounded-[10px] z-10'>
      <Image
        src='/dot_bg_card.svg'
        alt='bg'
        width={200}
        height={200}
        className='absolute top-1 left-1 opacity-40 z-1'
      />
      {/* icon */}
      <div className='flex justify-between items-center w-full z-20'>
        <div className='p-4  rounded-[10px] bg-gradient-to-br from-[#23181B] to-my-secondary/60 shadow-inner shadow-my-primary'>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <ArrowUpRightIcon className='size-6 text-my-secondary' />
      </div>

      <div className='flex flex-col gap-3 mt-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-muted-foreground text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default MissionCard
