import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import BreakfastRecipeData from "../../data/Recipes/breakfast.json";
import { Box, Columns } from "react-bulma-components";
import Recipe from "../../components/Recipe/Recipe";
import BreakfastGuideData from "../../data/RecipeGuide/breakfast.json";
import RecipeGuide from "../../components/RecipeGuide/RecipeGuide";

//zde budou videa či fotky pro pochopení cviků a recepty popsané podrobně

export default function Recipes(props: any) {

  const {id} = useParams()

  return (
    <>
      <Navbar selected={props.selected} />
      <Box>
        <h1>Recipes</h1>
      </Box>
      <>
        <Columns>
          {/* {BreakfastRecipeData.map((element, id) => (
            <Columns.Column>
              <Recipe key={1} {...element} />
            </Columns.Column>
          ))} */}
          {
            BreakfastRecipeData.map((element, index) => {
              if (index == Number(id)) {
                return(
                  <>
                    <Columns.Column>
                      <Recipe key={index} {...element} />
                    </Columns.Column>
                  </>
                )
              }
            })
          }
          {BreakfastGuideData.map((element, index) => (
            <RecipeGuide key={index} {...element} />
          ))}
        </Columns>
      </>
    </>
  );
}
