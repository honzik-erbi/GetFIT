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
            <Link to={"/cookbook"} style={{backgroundColor: selected == 'cookbook' ? '#C4D7F2' : 'auto'}}>Cookbook</Link>
          </li>
          <li>
            <Link to={"/programs"} style={{backgroundColor: selected == 'programs' ? '#C4D7F2' : 'auto'}}>Programs</Link>
          </li>
          <li>
            <Link to={"/tutorials"} style={{backgroundColor: selected == 'tutorials' ? '#C4D7F2' : 'auto'}}>Tutorials</Link>
          </li>
          <li>
            <Link to={"/usefulextras"} style={{backgroundColor: selected == 'usefulextras' ? '#C4D7F2' : 'auto'}}>Useful Extras</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
