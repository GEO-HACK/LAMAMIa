import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='text-6xl font-bold text-slate-400'>Our works</h1>
        {children}

    </div>
  )
}

export default Layout