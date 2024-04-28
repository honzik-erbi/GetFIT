import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Box } from "react-bulma-components";

export default function HomePage(props: any) {
    return(
        <>
        <Navbar selected={props.selected} />
        <Box>
          <h1>Homepage</h1>
        </Box>

        <div className="hometext">
          <h2><span style={{ color: "#41627e", fontWeight: 400 }}>Welcome</span> <span style={{ color: "#41627e", fontWeight: 400 }}>to</span> <span style={{ fontWeight: 800 }}>Get</span><span style={{ fontWeight: 900 }}>FIT</span>!</h2>
          <br />
          <div className="hometext1">
            <p><span style={{ fontWeight: 850 }}>Get</span><span style={{ fontWeight: 900 }}>FIT</span> is an application made for beginners in the gym, it allows and helps them have a smooth start in their fitness journey.</p>
            <br />
            <p>In this app you will find a cookbook, with foods for breakfast, lunch and dinner we have chosen foods that are easy to make and that provide lots of proteins and great micro nutrients all around. When you get to cookbook and you click on a food card you will be navigated to the Recipes page.</p>
            <Link to={"/cookbook"}>
              <button className="button is-dark">Go to Cookbook</button>
            </Link>
            <p>Another page you will find in this app is the Exercises page, that contains exercises that are divided to 6 groups. These exercises were chosen to stimulate all muscles of each muscle group.</p>
          <Link to={"/exercises"}>
              <button className="button is-dark">Go to Exercises</button>
            </Link>
            <p>Last page in this app is the Useful Extras page, this page contains useful extra things like equipment for lifting weights or supplements which you can use in daily.</p>
            <Link to={"/usefulextras"}>
              <button className="button is-dark">Go to Useful Extras</button>
            </Link>
          </div>
        </div>
        </>
    )
}