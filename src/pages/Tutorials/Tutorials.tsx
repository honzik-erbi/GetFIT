import React from "react";
import { Link } from "react-router-dom";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Tutorials() {
  return (
    <>
      <h1>Tutorials</h1>
      <Link to={"/"}>Go back to navbar</Link>
    </>
  );
}
