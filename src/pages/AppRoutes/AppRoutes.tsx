import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../../components/Navbar/Navbar";
import Programs from "../Programs/Programs";
import Tutorials from "../Recipes/Recipes";
import UsefulExtras from "../UsefulExtras/UsefulExtras";
import Recipes from "../Recipes/Recipes";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cookbook" element={<Cookbook selected= "cookbook"/>} />
        <Route path="/programs" element={<Programs selected="programs"/>} />
        <Route path="/recipes" element={<Recipes selected="recipes"/>} />
        <Route path="/usefulextras" element={<UsefulExtras selected="usefulextras"/>} />
      </Routes>
    </HashRouter>
  );
}
