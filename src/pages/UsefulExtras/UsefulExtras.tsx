import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Columns } from "react-bulma-components";
import ExtrasCard from "../../components/ExtrasCard/ExtrasCard";
import extrasData from "../../data/UsefulExtras/extras.json"


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
        {extrasData.map((element, index) => {
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
