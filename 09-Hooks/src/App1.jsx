import React, { useState } from "react";

const App = () => {
//Use of useState
  let [a, seta] = useState(0);

  function IncreaseNum() {
    seta(a + 1);
  }
  function DecreseNum(){
    seta(a - 1);
  }
   function Decrementby5(){
    seta(a-5)
  }
  function Incrementby5(){
    seta(a+5)
  }

  return (
    <div className="h-screen px-8 pt-2">
      <h2 className="bg-cyan-600 h-1/3 p-2 rounded-2xl w-full  text-8xl flex justify-center items-center ">
        {a}
      </h2>
      <div className="h-[10%] flex mt-4 justify-center ">
         <button
          className="bg-pink-500 p-3 rounded-2xl mt-2 mr-8"
          onClick={Decrementby5}
        >
          Decrease by 5
        </button>
        <button
          className="bg-pink-500 p-3 rounded-2xl mt-2 mr-8"
          onClick={IncreaseNum}
        >
          Increase
        </button>
        <button className="bg-pink-500 p-3 rounded-2xl mt-2 " onClick={DecreseNum}>
          Decrease
        </button>
        <button
          className="bg-pink-500 p-3 rounded-2xl mt-2 ml-8 justify-center"
          onClick={Incrementby5}
        >
          Increase By 5
        </button>
      </div>
    </div>
  );
};

export default App;
