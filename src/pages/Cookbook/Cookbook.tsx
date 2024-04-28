import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import BreakfastData from "../../data/Cookbook/breakfast.json";
import LunchData from "../../data/Cookbook/lunch.json";
import DinnerData from "../../data/Cookbook/dinner.json";
import { Box, Columns } from "react-bulma-components";

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
        <Columns>
        {BreakfastData.map((element, index) => (
          <Columns.Column>
          <Card typeData={"breakfast"} id={index}key={index} {...element} />
          </Columns.Column>
        ))}
        </Columns>
      </>
      <Box>
        <h1>
          Lunch
        </h1>
        </Box>
        <>
        <Columns >
        {LunchData.map((element, index) => (
          <Columns.Column>
          <Card typeData={"lunch"} id={index} key={index} {...element} />
          </Columns.Column>
        ))}
        </Columns>
      </>
      <Box>
        <h1>
          Dinner
        </h1>
        </Box>
        <>
        <Columns >
        {DinnerData.map((element, index) => (
          <Columns.Column>
          <Card typeData={"dinner"} id={index} key={index} {...element} />
          </Columns.Column>
        ))}
        </Columns>
      </>
    </>
  );
}
