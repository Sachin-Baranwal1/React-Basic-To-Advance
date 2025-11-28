import React from "react";

const App = () => {
  const clickButton = () => {
    // alert("you want to exit.");
    console.log("Button is clicked.");
  };

  return (
    <div className="main h-screen bg-teal-800 ">
      <div className="header bg-rose-400 h-1/4 flex  items-center justify-between px-5">

        <h1 className="font-semibold text-2xl text-blue-50 bg-pink-500/85  w-auto p-2 rounded-2xl">
          Functions in React
        </h1>

        <button
          className="bg-blue-500 shadow-lg shadow-blue-500/50 p-2 hover:bg-fuchsia-500 mr-5 rounded-xl text-white"
          onDoubleClick={clickButton}
        >
          Subscribe
        </button>
      </div>
      <div className="flex items-center h-1/4">
        <input className="w-[70%] p-5 border-2 mx-auto hover:bg-emerald-800 " type="text" placeholder="Write your name." onChange={ (elem) =>{
           console.log(elem.target.value);
        }} />
      </div>
       <div className="bg-sky-950 h-2/4" onMouseMove= { ()=> {
           hover:furichisa;
       }}>
       </div>
    </div>
  );
};

export default App;
