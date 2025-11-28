import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Left = () => {
  return (
    <div className='w-full mt-10 flex flex-col justify-between'>
        <div className='mt-8 flex flex-col justify-center items-center space-y-5'>
             <h1 className='text-5xl  font-bold'>Prospective <br /> customer <br />segmentation</h1>

        <p className='mx-17 text-1.5xl  font-normal  '>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.</p>
        </div>
        
        <div className='mx-4 pb-8'><ArrowUpRight className='w-30 h-30 ' /></div>

     </div>
  )
}

export default Left
 