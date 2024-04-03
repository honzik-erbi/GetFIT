import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "react-bulma-components";

//zde budou cvičební plány rozdělené do 3 skupin: Beginner/Intermediate/Skilled

export default function Exercises(props: any) {
  return (
    <>
      <>
        <Navbar selected={props.selected} />
        <Box>
          <h1>Exercises</h1>
        </Box>
      </>
      <div className="select">
        <select>
          <option>Select exercises</option>
          <option>Chest</option>
          <option>Back</option>
          <option>Legs</option>
          <option>Biceps</option>
          <option>Triceps</option>
          <option>Shoulders</option>
        </select>
      </div>
    </>
  );
}
