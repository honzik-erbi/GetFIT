import React from "react";
import { Link } from "react-router-dom";

//Navbar/hlavní stránka

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          GetFit
        </a>
        <ul>
          <li>
            <Link to={"/cookbook"}>Cookbook</Link>
          </li>
          <li>
            <Link to={"/programs"}>Programs</Link>
          </li>
          <li>
            <Link to={"/tutorials"}>Tutorials</Link>
          </li>
          <li>
            <Link to={"/usefulextras"}>Useful Extras</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
