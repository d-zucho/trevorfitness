import { TPillar } from '@/lib/types'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { motion } from 'motion/react'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
}

const PillarCard = ({ title, description, facts, link }: TPillar) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className='max-w-sm max-md:mx-auto'
    >
      <Card className='bg-card-bg h-full'>
        <CardHeader className='text-xl font-bold'>{title}</CardHeader>
        <CardContent>
          <div>
            <p className='text-text-secondary leading-relaxed'>{description}</p>
            <div className='flex flex-col gap-3 mt-8'>
              {facts.map((fact, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <CheckCircle className='size-4 text-my-primary' />
                  <span className='tracking-wide text-white/70'>{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-end mt-auto'>
          <div className='text-sm w-fit border-b border-my-primary/40 hover:border-my-primary transition-colors duration-300'>
            <Link
              href='/'
              className='text-my-primary uppercase text-sm tracking-wide'
            >
              {link}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default PillarCard
