import React from "react";
import { ArrowRight } from "lucide-react";

function Card({ img, p, suggestion, index }) {
  return (
    <div className="relative w-1/4 rounded-3xl overflow-hidden shadow-lg shrink-0 my-10">
      {/* Background image */}
      <img className="h-full w-full object-cover bg-no-repeat " src={img} alt="Card" />

      {/* Index circle */}
      <div className="h-6 w-6 absolute top-4 left-4 flex justify-center items-center bg-amber-50 rounded-full font-semibold text-gray-800 text-sm">
        {index}
      </div>
                  
      {/* Text overlay */}
      <div className="absolute bottom-16 w-full flex items-start justify- bg-gradient-to-t from-black/10 to-transparent py-3">
        <p className="text-lg font-medium  text-amber-50 mx-4 text-center">{p}</p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        <button className="bg-blue-500 text-white rounded-full px-3 py-1">
          {suggestion}
        </button>
        <button className="bg-blue-500 text-white rounded-full p-1">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Card;
