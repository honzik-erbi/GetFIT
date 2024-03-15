import React from "react";
import "../Card/Card.css";

export default function Card(data: CardType) {
  return (
    <div className="card">
      <img className="card-image" src={data.img} alt={data.h2} />
      <h2 className="card-headline">{data.h2}</h2>
      <p className="card-desc">{data.p}</p>
    </div>
  );
}

export type CardType = {
  h2: string;
  img: string;
  p: string;
};
