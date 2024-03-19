import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

//zde budou cvičební plány rozdělené do 3 skupin: Beginner/Intermediate/Skilled

export default function Exercises(props: any) {
  return (
    <>
    <Navbar selected={props.selected}/>
      <h1>Exercises</h1>
    </>
  );
}
