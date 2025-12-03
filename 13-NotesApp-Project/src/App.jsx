import React, { useState } from "react";
import {Trash} from "lucide-react"

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const deleteNote = (index) => {
  const updated = task.filter((_, i) => i !== index);
  setTask(updated);
};

  const FormHandler = (e) => {
    const copyTask = [...task];
    copyTask.push({ heading, details });
    e.preventDefault();
    setTask(copyTask);
    setHeading('')
    setDetails('')
  };
  return (
    <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  lg:flex lg:h-screen text-gray-800  ">
      <form
        className="flex flex-col lg:w-1/2 p-8 gap-4 items-start lg:border-r-2"
        action="submit"
        onSubmit={(e) => {
          FormHandler(e);
        }}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold ">Add Notes</h1>
          <img
            className="h-10 w-10 rounded"
            srcSet="https://static.vecteezy.com/system/resources/thumbnails/023/492/712/small/3d-notes-icon-png.png"
          />
        </div>

        {/* Heading Section */}
        <input className="text-zinc-100 border-2 border-black font-bold w-full px-5 py-2 text-2xl rounded outline-none"
          type="text"
          placeholder="Enter Heading of Notes 🔍 ?"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />

        {/* Notes Detail */}
        <textarea
          placeholder="Write Details"
          className="border-2 text-zinc-100 border-black flex w-full h-40 px-2 py-1 outline-none rounded items-start flex-row"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button
          className="border-2 active:scale-95
         hover:bg-gray-800 hover:text-white
         outline:none w-full py-1 bg-white text-black rounded"
        >
          Add Notes
        </button>
      </form>
      {/* Recent Notes */}
      <div className=" lg:w-1/2 p-8 overflow-hidden">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold ">Recent Notes</h1>
          <img
            className="h-10 w-10 rounded"
            srcSet="https://w7.pngwing.com/pngs/545/669/png-transparent-writing-cartoon-drawing-comics-writing-comics-pencil-hand-thumbnail.png"
          />
        </div>
        <div className="flex flex-wrap justify-start pt-6 gap-5  h-full lg:overflow-auto ">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative w-52 h-[45%] px-3 mb-5   wrap-break-word rounded-xl bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-cover bg-center bg-no-repeat scrollbar-hide   text-gray-800 pt-[6%]"
              > 
              
                 <h3 className="leading-tight  font-bold text-2xl ">
                  {elem.heading} 
                </h3>
                <button className=" absolute rounded-full top-3 p-1.5 bg-rose-500 right-3 hover:scale-110 active:scale-95" onClick={()=>{
                  deleteNote(idx)
                }}> <Trash color="white"/></button>
              
                <p className="leading-tight">{elem.details}</p>
                
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
