import React from "react";
import { Link } from "react-router-dom";

//Navbar/hlavní stránka

export default function Navbar(props: any) {
  
  const { selected } = props;
  
  return (
    <>
      <nav className="nav">
        <a className="site-title">
          GetFIT
        </a>
        <ul>
          <li>
            <Link to={"/cookbook"} style={{backgroundColor: selected == 'cookbook' ? 'darkgreen' : 'auto'}}>Cookbook</Link>
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
