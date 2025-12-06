import React, { useEffect, useState } from 'react'

const App = () => {
  const [incre, setincre] = useState(0);

  useEffect(() => {
    console.log("use effect is running.");
    
  },[incre])
  const Increment = ()=>{
    setincre(incre+1);
  }
  const Decrement = ()=>{
    setincre(incre-1);
  }
  return (
    <div className='p-5 h-screen bg-linear-to-br from-red-700 via-orange-600 to-yellow-500
'>     <h1 className='bg-teal-700 rounded-2xl flex justify-center text-3xl'>{incre}</h1>
      <button className='m-5 rounded-2xl bg-gray-700  p-3' onClick={Increment}> Badao ⬆️ </button>
      <button className='m-5 rounded-2xl bg-gray-700   p-3 ' onClick={Decrement}>Gatao ⬇️ </button>
    </div>
  )
}

export default App
