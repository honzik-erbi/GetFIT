import React from "react";
import './RecipeGuide.css'

export default function RecipeGuide(data: GuideType) {
  return (
    <div className="guide">
      <h2 className="guide-headline">{data.h2}</h2>
      <p className="guide-desc">{data.p}</p>
    </div>
  );
}

export type GuideType = {
  h2: string;
  p: string;
};