import React, { useState } from "react";
import Counter from "./assets/Counter";
import Button from "./assets/Button";
import Coin from "./assets/Coin";
import Biased from "./assets/Biased";

const App = () => {
  const [n, setn] = useState("Flip Coin");
  const [mark, setmark] = useState(50);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const flipSound = new Audio("/flip.mp3");
  const [flipAnim, setFlipAnim] = useState(false);

  const flipped = (mark) => {
    flipSound.currentTime = 0;
    flipSound.play();

    setFlipAnim(true);
    const p = mark / 100;
    let x = Math.random();
    if (x < p) setn("Heads");
    else setn("Tails");

    setTimeout(() => {
      setFlipAnim(false);
      
    }, 500);

    if (x < p) setHeadsCount((prev) => prev + 1);
    else setTailsCount((prev) => prev + 1);
  };

  return (
    <div className="bg-linear-to-tr from-[#4e2c87cc] via-[#363795] to-[#24C6DC] w-full h-screen flex flex-col text-neutral-300/80  ">
      {/* Biaseness */}
      <Biased Mark={mark} setMark={setmark} />

      {/* Coin */}
      <Coin side={n} flipAnim={flipAnim} onClick={() => flipped(mark)} />
      {/* Counters */}
      <Counter heads={headsCount} tails={tailsCount} />

      {/* Button of flip */}
      <Button onClick={() => flipped(mark)} />
    </div>
  );
};

export default App;
