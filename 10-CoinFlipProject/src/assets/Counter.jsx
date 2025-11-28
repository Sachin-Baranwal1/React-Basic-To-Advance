import React from 'react'

const Counter = (props) => {
  return (
      <div className="flex w-full text-4xl  justify-center items-center h-[25%] px-3 gap-10 ">
        <div className="font-semibold">
          Heads: <span className="text-white">{
          props.heads} </span>
        </div>
        <div className="font-semibold">
          Tails: <span className="text-white"> {props.tails}</span>
        </div>
      </div>
  )
}

export default Counter
