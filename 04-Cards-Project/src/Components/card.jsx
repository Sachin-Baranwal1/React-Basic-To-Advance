import React from 'react'
import { Bookmark } from "lucide-react";
function card(props) {
  return (<>
  <div className="parent">
      <div className="card">
        <div className="top">
          <img src= {props.image} alt="" />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h5>
            {props.company} <span>{props.date}</span>
          </h5>
          <h5>{props.post}</h5>
          <span className="btn-center">
            <button>{props.type}</button>
            <button>{props.position}</button>
          </span>
        </div>
        <div className="end">
              <hr />
          <div className="main">
            <div className="cost">
              <h5>{props.salary}</h5>
              <h6>{props.location}</h6>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  
  </> 
  )
}

export default card
