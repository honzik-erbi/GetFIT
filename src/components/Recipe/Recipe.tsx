import React from "react";
import './Recipe.css'

export default function Recipe(data: RecipeType) {
  return (
    <div className="recipe">
      <img className="recipe-image" src={data.img} alt={data.h2} />
      <h2 className="recipe-headline">{data.h2}</h2>
      <p className="recipe-desc">{data.p}</p>
    </div>
  );
}

export type RecipeType = {
  h2: string;
  img: string;
  p: string;
};