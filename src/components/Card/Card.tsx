import React from "react";
import "../Card/Card.css";
import { Link, useNavigate } from "react-router-dom";

export default function Card(data: CardType) {
  
  let navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipes/${data.id}`)
  }

  return (
    <div onClick={handleClick} className="card" >
      <img className="card-image" src={data.img} alt={data.h2}/>
      <h2 className="card-headline">{data.h2}</h2>
      <p className="card-desc">{data.p}</p>
    </div>
  );
}

export type CardType = {
  h2: string;
  img: string;
  p: string;
  id: number;
};
