import React from "react";
import "../ExtrasCard/ExtrasCard.css";

export default function ExtrasCard(data: ExtrasCardType) {
  return (
    <div className="extrascard">
      <img className="extrascard-image" src={data.img} alt={data.h2}/>
      <h2 className="extrascard-headline">{data.h2}</h2>
      <p className="extrascard-desc">{data.p}</p>
    </div>
  );
}

export type ExtrasCardType = {
  h2: string;
  img: string;
  p: string;
};