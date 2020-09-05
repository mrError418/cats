import React from "react";
import "./CatPicture.css";

export default function CatPicture(props) {
  let cat = props.data.cat;
  return (
    
      <img className='catImage'
        src={cat.url}
        alt="kitten"
      />
    
  );
}
