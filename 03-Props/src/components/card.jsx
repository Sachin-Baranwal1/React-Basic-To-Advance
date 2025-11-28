import React from 'react'

function card(props) {
    console.log(props);
  return (
    <div className='parent'>
       <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user} age: {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
       </div>
    </div>
  )
}

export default card
