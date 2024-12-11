'use client'

import React from 'react'
import Link from 'next/link';



const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  

const Navbar = () => {
  return (
    <div className='flex items-between justify-between   '>
        <Link 
        href='/'
        className=' text-xl font-bold text-green-400'
        
        >Lamamia</Link>
        <div className='flex gap-4 mr-2 font-semibold text-md text-slate-200 align-middle '>
          {links.map(link=>(
            <Link className='hover:text-green-600' href={link.url} key={link.id}>{link.title}</Link>
          ))}
          <button onClick={()=> console.log("logged out")}
            className='bg-green-600 rounded-lg text-slate-200 border border-green-600 text-sm px-3 py-1 hover:bg-transparent hover:text-green-600 cursor-pointer'> Log Out</button>
        </div>
    </div>
  )
}

export default Navbar