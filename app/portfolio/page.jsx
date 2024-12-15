import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold m-[20px]'> Choose a Gallery</h1>
      <div className='flex gap-5'>
        <Link href="/portfolio/illustrations" className="relative w-[300px] h-[400px] border-s-slate-300 rounded-sm border-[5px] bg-[url('/illustration.png')] bg-cover bg-center hover:text-green-400"><span className='absolute text-center  text-lg font-semibold right-[10px] bottom-[10px]'>illustrations</span></Link>
        <Link href="/portfolio/websites" className="relative w-[300px] h-[400px] border-s-slate-300 rounded-sm border-[5px] bg-[url('/websites.jpg')] bg-cover bg-center hover:text-green-400"><span className='absolute text-center  text-lg font-semibold right-[10px] bottom-[10px]'>websites</span></Link>
        <Link href="/portfolio/applications" className="relative w-[300px] h-[400px] border-s-slate-300 rounded-sm border-[5px] bg-[url('/apps.jpg')] bg-cover bg-center hover:text-green-400"><span className='absolute text-center text-lg font-semibold right-[10px] bottom-[10px]'>applications</span></Link>

      </div>
    </div>
  )
}

export default Portfolio