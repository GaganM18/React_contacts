import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p class="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
