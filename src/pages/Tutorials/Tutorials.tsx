import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Tutorials(props: any) {
  return (
    <>
    <Navbar selected={props.selected}/>
      <h1>Tutorials</h1>
      <Link to={"/"}>Go back to mainpage</Link>
    </>
  );
}
