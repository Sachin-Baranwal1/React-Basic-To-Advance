import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
const Navbar = () => {
    const data = useContext(ThemeDataContext)
    console.log(data);
    
  return (
    <div className='Navbar'>
      <h2 className=' '>{data}</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
