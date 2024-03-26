import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

//Navbar/hlavní stránka

export default function Navbar(props: any) {
  
  const { selected } = props;
  
  return (
    <>
      <nav className="nav">
        <a className="site-title"><span style={{color: '#3A4856', fontWeight: 850}}>Get</span><span style={{color: '#FFFFFF', fontWeight: 900}}>FIT</span></a>
        <ul>
          <li>
            <Link to={"/cookbook"} style={{backgroundColor: selected == 'cookbook' ? '#C4D7F2' : 'auto'}}>Cookbook</Link>
          </li>
          <li>
            <Link to={"/recipes/1"} style={{backgroundColor: selected == 'recipes' ? '#C4D7F2' : 'auto'}}>Recipes</Link>
          </li>
          <li>
            <Link to={"/exercises"} style={{backgroundColor: selected == 'exercises' ? '#C4D7F2' : 'auto'}}>Exercises</Link>
          </li>
          <li>
            <Link to={"/usefulextras"} style={{backgroundColor: selected == 'usefulextras' ? '#C4D7F2' : 'auto'}}>Useful Extras</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
