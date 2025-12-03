import React from "react";

const App = () => {
  const FormHandler = (e)=> {
    e.preventDefault();
  console.log("Form Submitted. ");
  
  }
  return (
    <div className="h-screen w-full ">
      <form action="submit" onSubmit={(e) => {
        FormHandler(e)
      }}>
        <input
          className="px-5 py-2.5 m-2.5  rounded-2xl bg-slate-600 "
          type="text"
          placeholder="Enter your Name. ?"
        />
        <button className="text-emerald-600 m-2.5 rounded-2xl px-5 py-2.5 bg-slate-600 hover hover:bg-orange-200 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
