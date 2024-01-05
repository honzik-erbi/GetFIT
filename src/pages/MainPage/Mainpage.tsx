import React from "react";
import { Link } from "react-router-dom";


export function MainPage() {
  return(
    <>
    <h1>Mainpage</h1>
    <Link to={"/navbar"}>Go to navbar</Link>
    <p>-</p>
    <Link to={"/cookbook"}>Go to cookbook</Link>
    </>
  )
}