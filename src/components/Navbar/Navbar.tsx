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
            <Link to={"/programs"} style={{backgroundColor: selected == 'programs' ? 'darkgreen' : 'auto'}}>Programs</Link>
          </li>
          <li>
            <Link to={"/tutorials"} style={{backgroundColor: selected == 'tutorials' ? 'darkgreen' : 'auto'}}>Tutorials</Link>
          </li>
          <li>
            <Link to={"/usefulextras"} style={{backgroundColor: selected == 'usefulextras' ? 'darkgreen' : 'auto'}}>Useful Extras</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
