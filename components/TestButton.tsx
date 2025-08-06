import React from 'react'

const TestButton = () => {
  return (
    // <button className='w-[120px] h-[40px] bg-my-primary text-white rounded-md bg-gradient-to-b from-my-primary via-my-primary to-black/40 relative'>
    //   <div className='absolute inset-0 rounded-md bg-gradient-to-t from-transparent to-[99%] to-white/30' />
    <button className='w-[120px] h-[40px] bg-my-primary text-white rounded-md relative inset-shadow-sm inset-shadow-black'>
      <div className='' />
      Test Button
    </button>
  )
}

export default TestButton
