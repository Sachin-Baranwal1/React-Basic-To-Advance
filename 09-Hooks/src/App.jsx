import React, { useState } from 'react'

const App = () => {
    let [a, seta] = useState(0);

   function Clicked(){
     seta(a+1); 
   }
    
  return (
    <div className="p-8">
        <h2 className='bg-cyan-600 p-2 rounded-2xl w-[25%] text-2xl' >The value of num is : {a}</h2>
        <button className='bg-rose-600 p-2 rounded-2xl mt-2'  onMouseOver ={(Clicked)}> Click </button>
    </div>
  )
}

export default App
