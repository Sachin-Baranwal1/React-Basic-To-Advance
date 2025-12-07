import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div >
       <Navbar />       
      <Routes>
       <Route path='/' element={<Home />}/> 
       <Route path='/about' element={<About />}/> 
       <Route path='/contact' element={<Contact />}/> 
      </Routes>
    </div>
  )
}

export default App
