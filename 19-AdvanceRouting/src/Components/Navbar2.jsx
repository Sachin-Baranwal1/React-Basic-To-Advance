import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {
    let navigate = useNavigate();
  return (
    <div className='px-5 py-2  '>
       <button onClick={()=>{
         navigate('/')
       }} 
       className='bg-sky-500 text-white rounded   px-2 py-2 m-5'> 
        Go to Homepage
       </button>
       <button 
       onClick={()=>{
         navigate(-1)}} 
         className='bg-yellow-400 text-black rounded px-2 py-2 m-5'>
        Back
        </button>
       <button 
       onClick={()=>{
         navigate(+1)}} 
       className='bg-rose-500 text-white rounded px-2 py-2 '>
        Next
       </button>
    </div>
  )
}

export default Navbar2
