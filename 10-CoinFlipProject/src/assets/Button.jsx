import React from 'react'

const Button = ({onClick}) => {
  return (
     <div className="w-full h-1/6 flex justify-center items-center">
        <button
          onClick={onClick}
          className="bg-teal-600 px-6 rounded-2xl  duration-300 ease-in-out
  hover:bg-cyan-600 hover:scale-110 focus:ring-2 focus:ring-amber-700
  text-3xl py-2"
        >
          Flip Coin
        </button>
      </div>
  )
}

export default Button
