import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Columns } from "react-bulma-components";
import ExtrasCard from "../../components/ExtrasCard/ExtrasCard";
import equipmentData from "../../data/UsefulExtras/equipment.json"
import supplementData from "../../data/UsefulExtras/supplements.json"


//zde budou užitečné doplňky jako například doporučené proteiny, trhačky/bandáže a jiné

export default function UsefulExtras(props: any) {
  return (
  <>
    <Navbar selected={props.selected} />
    <Box>
      <h1>Equipment</h1>
    </Box>
    <>
      <Columns>
        {equipmentData.map((element, index) => {
            return (
              <>
                <Columns.Column>
                  <ExtrasCard key={index} {...element} />
                </Columns.Column>
              </>
            );
        })}
      </Columns>
    </>
    <>
    <Box>
      <h1>Supplements</h1>
    </Box>
    </>
    <>
      <Columns>
        {supplementData.map((element, index) => {
            return (
              <>
                <Columns.Column>
                  <ExtrasCard key={index} {...element} />
                </Columns.Column>
              </>
            );
        })}
      </Columns>
    </>
  </>
);
}
// images borrowed from this website: https://gymbeam.cz/ , https://www.goodlift.cz/cs/