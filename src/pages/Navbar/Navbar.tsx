import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
        <h1>Navbar</h1>
        <Link to={"/"}>Go back</Link>
        </>
    )
}