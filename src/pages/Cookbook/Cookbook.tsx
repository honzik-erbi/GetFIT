import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Food from "../../components/Food/Food";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

//zde bude kuchařka(všelijaké recepty pro lidi co chtějí něco dělat se svojí postavou[hubnout/nabírat])

export default function Cookbook(props: any) {
  return (
    <>
      <Navbar selected={props.selected} />
      <h1>Cookbook</h1>
      <h2>Main dishes</h2>

      <Grid container spacing={0}>
        <Grid xs={3}>
          <Food
            headline="Kuře s rýží"
            img=""
            description="kuře haha"
          />
        </Grid>
        <Grid xs>
          <Food
            headline="Míchaná vajíčka"
            img=""
            description="This impressivsdfsdfdsfdsfdsffdsffe paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
          />
        </Grid>

        <Grid xs={3}>
          <Food
            headline="gag"
            img=""
            description="This impressivsdfsdfdsfdsfdsffdsffe paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
          />
        </Grid>
        <Grid xs={2.6}>
          <Food
            headline="gaga"
            img=""
            description="This impressivsdfsdfdsfdsfdsffdsffe paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
          />
        </Grid>
      </Grid>

      <Link to={"/"}>Go back to mainpage</Link>
    </>
  );
}
