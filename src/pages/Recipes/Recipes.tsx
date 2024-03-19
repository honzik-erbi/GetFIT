import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import RecipeData from "../../data/Recipes/recipe.json"
import { Box, Columns,} from "react-bulma-components";
import Recipe from "../../components/Recipe/Recipe";
import RecipeGuideData from "../../data/RecipeGuide/recipeguide.json"
import RecipeGuide from "../../components/RecipeGuide/RecipeGuide";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Recipes(props: any) {
  return (
    <>
    <Navbar selected={props.selected}/>
      <Box>
      <h1>Recipes</h1>
      </Box>
      <>
        <Columns>
        {RecipeData.map((element, index) => (
          <Columns.Column>
          <Recipe key={index} {...element} />
          </Columns.Column>
        ))}
        {RecipeGuideData.map((element, index) => (
          <RecipeGuide key={index} {...element} />
        ))}
        </Columns>
      </>
    </>
  );
}
