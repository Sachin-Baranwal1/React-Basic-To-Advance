import React from 'react'
import Card from './components/card'
function App() {
  return (
   <>
   <div className="parent">
      <Card user={'sachin'} age={21} img={'https://plus.unsplash.com/premium_photo-1668736594225-55e292fdd95e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'}/>

     <Card user={'sahil'} age={29} img={'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFuaW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'} />
     
     <Card user={'satyam'} age={31} img={'https://images.unsplash.com/photo-1761618058254-a50c30993b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600'}/>
   </div></>
  )
}

export default App
