import React from "react";
import { Link } from "react-router-dom";

//zde budou užitečné doplňky jako například doporučené proteiny, trhačky/bandáže a jiné

export default function UsefulExtras() {
  return(
    <>
    <h1>Useful Extras</h1>
    <Link to={"/"}>Go back to navbar</Link>
    </>
  )
}
