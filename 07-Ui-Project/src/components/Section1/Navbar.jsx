import React from 'react'
import { IterationCcw } from 'lucide-react'; 

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 h-16 w-full'>
      <h3 className='bg-black text-amber-50 rounded-2xl px-2 py-1 text-sm' >TARGET AUDIENCE</h3>
      <button className='flex px-6 py-1 rounded-full bg-gray-400 text-sm items-center' style={{ fontFamily: 'cursive' }}><IterationCcw /> DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Navbar

