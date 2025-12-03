import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('');
  
  const FormHandler = (e)=> {
    e.preventDefault(); //Save the submition message
  console.log("Form Submitted by -> ",title);
  setTitle('')
  }
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <form action="submit" onSubmit={(e) => {
        FormHandler(e)
      }}>
        <input
          className="px-5 py-2.5 m-5  rounded-2xl bg-slate-600 "
          type="text"
          placeholder="Enter your Name. ?"
          value={title}
           onChange={ (e)=>{
            setTitle(e.target.value);
            // console.log(e.target.value);
            
           }}
        />
        <button className="text-emerald-600 m-5 rounded-2xl px-5 py-2.5 bg-slate-600 hover hover:bg-orange-200 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
