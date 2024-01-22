import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";

//zde bude kuchařka(všelijaké recepty bro lidé co chtějí něco dělat se svojí postavou)

export default function Cookbook() {
  return (
    <>
    <Navbar />
      <h1>Cookbook</h1>
      <Link to={"/"}>Go back navbar</Link>
    </>
  );
  }