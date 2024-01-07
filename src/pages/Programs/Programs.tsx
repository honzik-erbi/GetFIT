import { Link } from "react-router-dom";
import React from "react";

//zde budou cvičební plány rozdělené do 3 skupin: Beginner/Intermediate/Skilled

export default function Programs() {
  return (
    <>
      <h1>Programs</h1>
      <Link to={"/"}>Go back navbar</Link>
    </>
  );
}
