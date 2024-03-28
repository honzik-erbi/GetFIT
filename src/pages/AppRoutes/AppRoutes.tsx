import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../../components/Navbar/Navbar";
import Tutorials from "../Recipes/Recipes";
import UsefulExtras from "../UsefulExtras/UsefulExtras";
import Recipes from "../Recipes/Recipes";
import Exercises from "../Exercises/Exercises";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cookbook" element={<Cookbook selected= "cookbook"/>} />
        <Route path="/exercises" element={<Exercises selected="exercises"/>} />
        <Route path={"/recipes/:typeData/:id"} element={<Recipes selected="recipes"/>} />
        <Route path="/usefulextras" element={<UsefulExtras selected="usefulextras"/>} />
      </Routes>
    </HashRouter>
  );
}
