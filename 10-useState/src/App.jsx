import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({user: "sachin" ,age : 20})
  const Clicked = ()=>{
     //concept of destructuring
    //  const newNum = { ...num };
    //  newNum.user = "Rahul";
    //  newNum.age = 25;
     setnum(newNum => ({ ...newNum ,user:"Maglu", age:69}) );
  }
  
  const [numa, setnuma] = useState([11,22,33,44])
  const clickedArr = ()=> {
    const newArr = [ ...numa]
    newArr.push(21);
    setnuma(newArr)
  }
  const clickedArra = ()=> {
    const newArr = [ ...numa]
    newArr.pop();
    setnuma(newArr)
  }

  return (
    <div>
      <nav><h1>{num.user }, {num.age}</h1>
      <button onClick={ Clicked} > Click </button></nav>
      <div>
        <h1>{numa}</h1>
      <button onClick={ clickedArr} > Click </button>
      </div>
      <button onClick={ clickedArra} > Click </button>
    </div>
  )
}

export default App
