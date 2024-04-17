import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Card, Columns } from "react-bulma-components";
import BackData from "../../data/Exercises/back.json";
import ChestData from "../../data/Exercises/chest.json";
import BicepsData from "../../data/Exercises/biceps.json";
import TricepsData from "../../data/Exercises/triceps.json";
import ShoulderData from "../../data/Exercises/shoulders.json";
import LegsData from "../../data/Exercises/legs.json";

export default function Exercises(props: any) {
  const [exerciseData, setExerciseData] = useState();

  const handleClick = (e: React.MouseEvent) => {

    
  };

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
          <option onClick={handleClick}>Back</option>
          <option>Biceps</option>
          <option>Triceps</option>
          <option>Shoulders</option>
          <option>Legs</option>
        </select>
      </div>
    </>
  );
}
