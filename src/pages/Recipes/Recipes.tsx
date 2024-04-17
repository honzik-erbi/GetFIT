import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { Box, Columns } from "react-bulma-components";
import Recipe from "../../components/Recipe/Recipe";
import LunchRecipeData from "../../data/Recipes/lunch.json";
import LunchGuideData from "../../data/RecipeGuide/lunch.json";
import BreakfastRecipeData from "../../data/Recipes/breakfast.json";
import BreakfastGuideData from "../../data/RecipeGuide/breakfast.json";
import DinnerRecipeData from "../../data/Recipes/dinner.json";
import DinnerGuideData from "../../data/RecipeGuide/dinner.json";
import RecipeGuide from "../../components/RecipeGuide/RecipeGuide";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Recipes(props: any) {
  const { id, typeData } = useParams();

  const [recipeData, setRecipeData] = useState(BreakfastRecipeData);
  const [guideData, setGuideData] = useState(BreakfastGuideData);

  useEffect(() => {
    if (typeData == "breakfast") {
      setRecipeData(BreakfastRecipeData);
      setGuideData(BreakfastGuideData);
    }
    if (typeData == "lunch") {
      setRecipeData(LunchRecipeData);
      setGuideData(LunchGuideData);
    }
    if (typeData == "dinner") {
      setRecipeData(DinnerRecipeData);
      setGuideData(DinnerGuideData);
    }
  }, []);

  return (
    <>
      <Navbar selected={props.selected} />
      <Box>
        <h1>Recipes</h1>
      </Box>
      <>
        <Columns>
          {recipeData.map((element, index) => {
            if (index == Number(id)) {
              return (
                <>
                  <Columns.Column>
                    <Recipe key={index} {...element} />
                  </Columns.Column>
                </>
              );
            }
          })}
          {guideData.map((element, index) => {
            if (index == Number(id)) {
              return (
                <>
                  <RecipeGuide key={index} {...element} />
                </>
              );
            }
          })}
        </Columns>
      </>
    </>
  );
}
