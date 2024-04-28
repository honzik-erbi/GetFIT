import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "react-bulma-components";
import exerciseData from "../../data/Exercises/exercises.json";
import ExCard from "../../components/ExerciseCard/ExerciseCard";

export default function Exercises(props: any) {

  const [selectedData, setSelectedData] = useState<any>([])
  const [selected, setSelected] = useState("root")

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
    for (const ops of exerciseData) {
      if (e.target.value == ops.name) {
        setSelectedData(ops.exercises)
        return
      }
    }

    if (e.target.value == "root") {
      let newArr = [] as any
      let count = 0 as number
      for (let i = 0; i < exerciseData.length; i++) {
        for (let j = 0; j < exerciseData[i].exercises.length; j++) {
          newArr[count] = exerciseData[i].exercises[j]
          count = count + 1
        }
        
        
      }
      setSelectedData(newArr)
      
    }
  };

  useEffect(() => {
    let newArr = [] as any
    let count = 0 as number
    for (let i = 0; i < exerciseData.length; i++) {
      for (let j = 0; j < exerciseData[i].exercises.length; j++) {
        newArr[count] = exerciseData[i].exercises[j]
        count = count + 1
      }
      
      
    }
    setSelectedData(newArr)
  }, [])

  return (
    <>
      <>
        <Navbar selected={props.selected} />
        <Box>
          <h1>Exercises</h1>
        </Box>
      </>
      <div className="select">
        <select onChange={handleClick}>
          <option value="root" selected>Select exercises</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="shoulders">Shoulders</option>
          <option value="legs">Legs</option>
        </select>
      </div>
      <div className="exercise-card-container">
      {
        selected != "root" 
        ? selectedData.map((element: {h2: string; img: string; p: string;}) => {
          return(
            <ExCard h2={element.h2} img={element.img} p={element.p}/>
          )
        })
        : (
          selectedData.map((element: any) => {
            return(
              <>
              <ExCard h2={element.h2} img={element.img} p={element.p}/>
              </>
            )
          })
        )
      }
      </div>
    </>
  );
}

// all GIFs were borrowed from this site: https://www.lyfta.app/exercises ,
