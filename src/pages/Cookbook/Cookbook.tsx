import { Link } from "react-router-dom";
import React from "react";

//zde bude kuchařka(všelijaké recepty bro lidé co chtějí něco dělat se svojí postavou)

export default function Cookbook() {
  return (
    <>
      <h1>Cookbook</h1>
      <Link to={"/"}>Go back navbar</Link>
    </>
  );
  }