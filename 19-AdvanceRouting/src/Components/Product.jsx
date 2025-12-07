import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div className='text-emerald-700 text-2xl '>
    
       <nav className='flex gap-10 items-center justify-center pt-5 '>
        <Link className='hover:text-zinc-300' to='/product/mens'>Mens Section</Link>
       <Link className='hover:text-zinc-300' to='/product/womens'>Womens Sections</Link>
       <Link className='hover:text-zinc-300' to='/product/kids'>Kids Sections</Link>
       </nav>
       <Outlet />
    </div>
  )
}

export default Product
