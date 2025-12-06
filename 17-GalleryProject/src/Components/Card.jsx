import React from 'react'

const Card = (props) => {
  return (
   <div className="flex flex-wrap gap-5 text-black justify-center items-center bg-slate-950">
        {props.Totaldata.length < 1 ? (
          <h2 className="text-shadow-violet-400 text-zinc-50 absolute top-1/2 left-1/2">
            Loading...
          </h2>
        ) : (
          props.Totaldata.map((elem, idx) => (
            <div key={idx} className="bg-gray-400   rounded-xl ">
              <a href={elem.url} target="_blank">
                <img
                  className="h-50 rounded-t-xl w-60 object-cover "
                  src={elem.download_url}
                  alt="No Image Found!"
                /> 
              </a>
              <h2 className="flex justify-center ">{elem.author}</h2>
            </div>
          ))
        )}
      </div>
  )
}

export default Card
