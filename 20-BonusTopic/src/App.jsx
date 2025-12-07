import React, { useState } from 'react'
import Navbar from './Components/Navbar'
const App = () => {
  const [Theme, setTheme] = useState('Light')
  return (
    <div className='text-amber-300'>
      <h2 className='bg-red-800 px-5'>The Theme is {Theme}.</h2>
      <Navbar theme={Theme} settheme={setTheme} />
    </div>
  )
}

export default App
