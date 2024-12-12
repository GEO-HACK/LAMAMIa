import React from 'react'
import '../styles/base.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const page = () => {
  return (
    <div className='flex items-center gap-[100px] '>
      <div className='flex-1 flex flex-col gap-[50px]'>
        <h1 className='gradient-text text-6xl font-bold'>Better design for your digital products</h1>
        <p className='font-semibold text-md '>Truning your idea into reality. we bring together the teams from the global tech industry</p>
        <Button text="See Our Works " url= "/portfolio"/> 
      </div>
      <div className='flex-1'>
        <Image src="/hero.png" alt='image from pexel' width={400} height={400} className='px-2 ml-8' />
      </div>
      
      
    </div>
  )
}

export default page
