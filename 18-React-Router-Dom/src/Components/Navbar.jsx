import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-teal-800 px-10 py-2'>
        <h3>Mysterious World</h3>
        <div className='flex gap-10 '>
            <Link className="hover:text-fuchsia-400 active:text-rose-700 transition-colors" to='/'>Home</Link>
            <Link className="hover:text-fuchsia-400 active:text-rose-700 transition-colors" to='/contact'>Contact</Link>
            <Link className="hover:text-fuchsia-400 active:text-rose-700 transition-colors" to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar
