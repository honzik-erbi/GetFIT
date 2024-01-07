import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../Navbar/Navbar";
import Programs from "../Programs/Programs";
import Tutorials from "../Tutorials/Tutorials";
import UsefulExtras from "../UsefulExtras/UsefulExtras";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/cookbook" element={<Cookbook />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/usefulextras" element={<UsefulExtras />} />
      </Routes>
    </HashRouter>
  );
}
