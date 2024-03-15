import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import RecipeData from "../../data/Recipes/recipe.json"
import { Box, Columns,} from "react-bulma-components";
import Recipe from "src/components/Recipe/Recipe";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Recipes(props: any) {
  return (
    <>
    <Navbar selected={props.selected}/>
      <Box>
      <h1>Recipes</h1>
      </Box>
      <>
      <>
        {RecipeData.map((element, index) => (
          <Card key={index} {...element} />
        ))}
      </>
</>






      <Link to={"/"}>Go back to mainpage</Link>
    </>
  );
}
