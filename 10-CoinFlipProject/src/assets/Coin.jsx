import React from 'react'

const Coin = (props) => {
  return (
    <div onClick={props.onClick}>
      <div className="w-full flex justify-center mt-5 ">
        <div 
          className={`coin flex justify-center items-center 
  md:h-[200px] md:w-[200px] h-[170px] w-[170px] 
  bg-rose-800 inset-shadow-sm inset-shadow-zinc-800 
  rounded-full text-amber-50 font-bold 
  ${props.flipAnim ? "flip" : ""}`}
        >
          {props.side}
        </div>
      </div>
    </div>
  )
}

export default Coin
