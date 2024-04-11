import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "react-bulma-components";
import BackData from "../../data/Exercises/back.json"
import ChestData from "../../data/Exercises/chest.json"
import BicepsData from "../../data/Exercises/biceps.json"
import TricepsData from "../../data/Exercises/triceps.json"
import ShoulderData from "../../data/Exercises/shoulders.json"
import LegsData from "../../data/Exercises/legs.json"

//zde budou cvičební plány rozdělené do 3 skupin: Beginner/Intermediate/Skilled

export default function Exercises(props: any) {

  const [exerciseData, setExerciseData] = useState();


  const data = {exerciseData}

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
