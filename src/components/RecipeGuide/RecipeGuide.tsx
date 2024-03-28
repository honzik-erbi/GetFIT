import React from "react";
import './RecipeGuide.css'

export default function RecipeGuide(data: GuideType) {
  return (
    <div className="guide">
      <h2 className="guide-headline">{data.h2}</h2>
      <br />
      <p className="guide-desc">{data.p}</p>
      <br />
      <p className="guide-ingred">{data.ingred}</p>
    </div>
  );
}

export type GuideType = {
  h2: string;
  p: string;
  ingred: string;
};