import React from 'react'
import { ArrowBigLeft, ArrowBigRight ,TextCursor } from "lucide-react";
const Biased = (props) => {
  return (
   
      <div
        className="h-1/6 w-full flex flex-col  justify-center  items-center text-3xl
       text-gray-300/90  gap-y-4"
      >
        <div className="flex gap-x-3  items-center ">
          <ArrowBigLeft color="BlanchedAlmond" size={38} />
          Tails <TextCursor /> Biasedness <TextCursor /> heads{" "}
          <ArrowBigRight color="BlanchedAlmond" size={38} />
        </div>
        <input
          type="range"
          id="biasedness"
          min={0}
          max={100}
          value={props.Mark}
          onChange={(e) => {
            props.setMark((e.target.value));
          }}
          className="w-[50%]  md:w-[30%]  "
        />
        <div className="flex -mt-4 w-[60%]  md:w-[30%] text-xl justify-center md:gap-x-20">
          {props.Mark}%
        </div> 
      </div>
  )
}

export default Biased
