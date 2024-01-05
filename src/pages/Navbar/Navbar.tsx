import React from "react";
import { Link } from "react-router-dom";

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
        </ul>
      </nav>
      <p className="text">Barvy jsou testovací</p>
    </>
  );
}
