import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/Mainpage";
import Cookbook from "../Cookbook/Cookbook";
import Navbar from "../Navbar/Navbar";



export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/cookbook" element={<Cookbook/>}/>
                <Route path="/navbar" element={<Navbar/>}/>
            </Routes>
        </HashRouter>
    )
}
