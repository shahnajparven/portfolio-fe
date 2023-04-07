import { Box } from "@mui/material";
import React from "react";
import Expertise from "../expertise/Expertise";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import Header from "./header/Header";
import "./Home.css";

const Home = () => {
  return (
    <Box >
    <Box className="container" px={{lg:12,md:12,sm:2,xs:2}}>
      <Header/>
      <Banner/>
      </Box>
      <Box px={{lg:12,md:12,sm:2,xs:2}}>
      <Expertise/>
      </Box>
    </Box>
  );
};

export default Home;
