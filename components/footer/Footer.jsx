import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-[50px] flex items-center justify-between'>
      <div >©2024 Lamamia.All rights reserved</div>
      <div className='flex gap-2'>
        <Image src='/1.png' width={20} height={20} alt='social image'/>
        <Image src='/2.png' width={20} height={20} alt='social image'/>
        <Image src='/3.png' width={20} height={20} alt='social image'/>
        <Image src='/4.png' width={20} height={20} alt='social image'/>
        

      
      </div>
    </div>
  )
}

export default Footer