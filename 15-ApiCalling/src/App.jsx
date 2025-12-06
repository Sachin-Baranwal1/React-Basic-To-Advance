import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setimage] = useState([]);
  const Apicall = async () => {
    const result = await axios.get("https://picsum.photos/v2/list");
    setimage(result.data);
  };
  return (
    <div className="bg-zinc-700 min-h-screen p-5">
      <button
        className="bg-rose-900 p-2 rounded-full hover:scale-110 mb-5"
        onClick={Apicall}
      >
        API Call
      </button>
      {image.map((ele, idx) => (
        <div key={idx} className="bg-orange-500 w-[30%] h-[50%]"> 
        <img src={ele.download_url} alt="" srcset="" />
         </div>
      ))}
    </div>
  );
};

export default App;

// const App = () => {
//   const [data, setdata] = useState([])
//   const Apicall = async ()=> {
//        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//        setdata(response.data);
//   }
//   return (
//     <div className='bg-zinc-700 min-h-screen p-5'>
//     <button
//         className='bg-rose-900 p-2 rounded-full hover:scale-110 mb-5'
//         onClick={Apicall}
//       >
//         API Call
//       </button>
//     {  data.map((elem,idx) => (
//       <h1 className='w-full  bg-amber-900 flex justify-center p-2 m-2 rounded-2xl' key={idx}> {elem.name} <br /> {elem.address.city} <br /> {elem.phone} <br /> {elem.email} </h1>
//     ))}
//     </div>
//   )
// }

// export default App

// export default App;
// import React, { useState } from 'react';
// const App = () => {
//   const [data, setData] = useState([]);
//   const Apicall = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const result = await response.json();
//     console.log(result);
//     setData(result);
//   };
//   return (
//     <div className='bg-zinc-700 min-h-screen p-5'>
//       <button
//         className='bg-rose-900 p-2 rounded-full hover:scale-110 mb-5'
//         onClick={Apicall}
//       >
//         API Call
//       </button>
//       {data.map((elem, idx) => (
//         <div key={idx} className='bg-gray-800 p-4 my-2 rounded'>
//           <p><strong>{elem.name}</strong></p>
//           <p>{elem.username}</p>
//           <p>{elem.address.city}</p>
//           <p>{elem.email}</p>
//           <p>{elem.phone}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
