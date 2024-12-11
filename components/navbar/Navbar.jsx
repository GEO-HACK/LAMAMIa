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
    <div className='flex items-between justify-between'>
        <Link 
        href='/'
        className='ml-4 text-xl font-bold text-green-700'
        
        >Lamamia</Link>
        <div className='flex gap-4 mr-2 font-semibold text-md'>
          {links.map(link=>(
            <Link href={link.url} key={link.id}>{link.title}</Link>
          ))}
        </div>
    </div>
  )
}

export default Navbar