import { Box } from "@mui/material";
import React from "react";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import Header from "./header/Header";
import "./Home.css";

const Home = () => {
  return (
    <Box px={12} className="container">
      <Header/>
      <Banner/>
      <Cards/>
    </Box>
  );
};

export default Home;
