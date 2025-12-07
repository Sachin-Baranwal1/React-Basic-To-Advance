import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-teal-900  sm:flex-wrap items-center px-10 py-2'>
       <h1 className='flex items-center gap-10 font-bold text-2xl py-2 text-orange-200'>Mysterious World</h1>
       <div className='flex items-center gap-10 sm:flex-wrap font-bold text-2xl py-2 text-orange-200'>
          <Link  className='active:text-fuchsia-400 hover:text-gray-900' to='/' >Home</Link>
          <Link className='active:text-fuchsia-400 hover:text-gray-900'  to='/product' >Product</Link>
          <Link  className='active:text-fuchsia-400 hover:text-gray-900' to='/contact' >Contact</Link>
          <Link className='active:text-fuchsia-400 hover:text-gray-900' to='/about' >About</Link>
       </div>
    </div>
  )
}

export default Header
