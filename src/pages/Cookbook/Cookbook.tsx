import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Food from "../../components/Food/Food";
import Card from "../../components/Card/Card";

//zde bude kuchařka(všelijaké recepty pro lidi co chtějí něco dělat se svojí postavou[hubnout/nabírat])
    
import Foods from "../../data/food.json"

    // fetch('../../data/food.json')
    // .then((response) => response.json())
    // .then((json) => console.log(json));


export default function Cookbook(props: any) {
  return (
    <>
      <Navbar selected={props.selected} />
      <h1>Breakfast</h1>
    <>
      <Card />
      <Card />
      <Card />
    </>
      <Link to={"/"}>Go back to mainpage</Link>
    </>
  );
}
