import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import FoodData from "../../data/food.json";
import { Box, Button, Columns } from "react-bulma-components";

//zde bude kuchařka(všelijaké recepty pro lidi co chtějí něco dělat se svojí postavou[hubnout/nabírat])

export default function Cookbook(props: any) {
  return (
    <>
      <Navbar selected={props.selected} />
      <Box>
        
        <h1>
          Breakfast
        </h1>
        </Box>
      <>
        <Columns >
        {FoodData.map((element, index) => (
          <Columns.Column>
          <Card key={index} {...element} />¨
          </Columns.Column>
        ))}
        </Columns>
      </>
      <Link to={"/"}>Go back to mainpage</Link>
    </>
  );
}
