import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Food from "../../components/Food/Food"

//zde bude kuchařka(všelijaké recepty bro lidé co chtějí něco dělat se svojí postavou)

export default function Cookbook() {


  return (
    <>
    <Navbar />
      <h1>Cookbook</h1>
      <Food
        headline="Paella dish"
        img='/static/images/cards/paella.jpg'
        description='This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'
        mainText={
          'banger'
        }
      />
      <Food
        headline=""
        img='/static/images/cards/paella.jpg'
        description='This impressivsdfsdfdsfdsfdsffdsffe paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'
        mainText={
          'banger'
        }
      />
      <Food/>

      <Link to={"/"}>Go back navbar</Link>
    </>
  );
  }