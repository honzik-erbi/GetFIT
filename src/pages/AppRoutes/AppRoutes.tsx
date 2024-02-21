import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../../components/Navbar/Navbar";
import Programs from "../Programs/Programs";
import Tutorials from "../Tutorials/Tutorials";
import UsefulExtras from "../UsefulExtras/UsefulExtras";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cookbook" element={<Cookbook selected= "cookbook"/>} />
        <Route path="/programs" element={<Programs selected="programs"/>} />
        <Route path="/tutorials" element={<Tutorials selected="tutorials"/>} />
        <Route path="/usefulextras" element={<UsefulExtras selected="usefulextras"/>} />
      </Routes>
    </HashRouter>
  );
}
