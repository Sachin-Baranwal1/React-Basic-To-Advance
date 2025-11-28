import React, { useState } from "react";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import Counter from "./assets/Counter";
import Button from "./assets/Button";
import Coin from "./assets/Coin"

const App = () => {
  const [n, setn] = useState("Heads");

  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [flipAnim, setFlipAnim] = useState(false);

  const flipped = () => {
    setFlipAnim(true);
    let x = Math.random();
    if (x > 0.5) setn("Tails");
    else setn("Heads");

    setTimeout(() => {
      setFlipAnim(false);
    }, 800);
    if (x <= 0.5) setHeadsCount((prev) => prev + 1);
    else setTailsCount((prev) => prev + 1);
  };
  return (
    <div className="bg-linear-to-tr from-[#4e2c87cc] via-[#363795] to-[#24C6DC] w-full h-screen flex flex-col text-neutral-300/80  ">

      {/* Biaseness */}
      <div className="h-1/6 w-full flex flex-col  justify-center  items-center text-3xl
       text-gray-300/90 gap-y-4">
      Biasedness
      <input type="range" min={0} max={100} defaultValue={[50]}  className ="w-[50%]  md:w-[30%]   "/>
      
      <div className="flex -mt-3 w-[60%]  md:w-[30%]  justify-center md:gap-x-20">
      {["0%", "25%", "50%", "75%", "100%"].map((label) => (
      <span key={label} className=" text-sm 
      text-gray-300/70">
        {label}
      </span>
    ))}
      </div>
  
      </div>

      {/* Coin */}
       <Coin side={n} flipAnim={flipAnim} onClick={flipped} />

      {/* Counters */}
      <Counter heads={headsCount} tails={tailsCount} />

      {/* Button of flip */}
      <Button onClick={flipped} />
    </div>
  );
};

export default App;

//  <div className="flex items-center gap-1">
//             <ArrowDownNarrowWide size={30} color="DarkSeaGreen" className="mt-1.5 "/>
//             <button className="flex  ">
//               Biasedness
//             </button>
//           </div>
//           <div>
//             <button className="flex flex-row">
//               <ArrowUpNarrowWide size={30} color="DarkSeaGreen" className="mt-1.5" />
//               Biasedness
//             </button>
//           </div>
