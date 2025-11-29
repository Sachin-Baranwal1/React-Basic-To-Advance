import React from 'react'

const Counter = (props) => {
  return (
      <div className="flex w-full md:text-4xl  text-2xl justify-center items-center h-[25%] px-3 md:gap-10  ">
        <div className="font-semibold pr-5">
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
