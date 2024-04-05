import React from "react";
import "./RecipeGuide.css";
import { Link } from "react-router-dom";

export default function RecipeGuide(data: GuideType) {
  return (
    <div className="guide">
      <h2 className="guide-headline">{data.h2}</h2>
      <br />
      <p className="guide-desc">{data.p}</p>
      <br />
      <p className="guide-ingred">{data.ingred}</p>
      <br />
      <Link to={"/cookbook"}>
        <button className="button is-dark">Go back to Cookbook</button>
      </Link>
    </div>
  );
}

export type GuideType = {
  h2: string;
  p: string;
  ingred: string;
};
