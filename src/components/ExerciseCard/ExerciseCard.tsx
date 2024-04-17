import React from "react";
import "../Card/Card.css";

export default function ExCard(data: ExCardType) {
  return (
    <div className="excard">
      <img className="excard-image" src={data.img} alt={data.h2} />
      <h2 className="excard-headline">{data.h2}</h2>
      <p className="excard-desc">{data.p}</p>
    </div>
  );
}

export type ExCardType = {
  h2: string;
  img: string;
  p: string;
};
