import React from 'react'
import Link from 'next/link'

const Button = ({text,url}) => {
  return (
    <Link href={url}>
        <button className='px-4 py-2 font-semibold w-max bg-green-400 rounded-md border border-green-400 hover:bg-transparent hover:text-green-400'>
            {text}
        </button>
    </Link>
    
  )
}

export default Button