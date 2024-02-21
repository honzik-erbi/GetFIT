import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

//zde budou cvičební plány rozdělené do 3 skupin: Beginner/Intermediate/Skilled

export default function Programs(props: any) {
  return (
    <>
    <Navbar selected={props.selected}/>
      <h1>Programs</h1>
      <Link to={"/"}>Go back mainpage</Link>
    </>
  );
}
