import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
//import { MainPage } from "../MainPage/Mainpage";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../Navbar/Navbar";
import Programs from "../Programs/Programs";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cookbook" element={<Cookbook />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </HashRouter>
  );
}
