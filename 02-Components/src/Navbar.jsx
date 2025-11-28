import React from "react";

function navbar() {
  return (
    <div className="nav">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1024px-React_Logo_SVG.svg.png"
          alt=""
        />
        <p id="p">React</p>
      </div>
      <div className="list">
          <a href="home">Home</a>
          <a href="detail">Detail</a>
          <a href="fees">Fees</a>
          <a href="fees">Status</a>
          <a href="about">About</a>
      </div>
    </div>
  );
}

export default navbar;
