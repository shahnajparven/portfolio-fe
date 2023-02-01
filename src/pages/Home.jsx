import { Box } from "@mui/material";
import React from "react";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import "./Home.css";

const Home = () => {
  return (
    <Box px={12} className="container">
      <Header/>
      <Banner/>
    </Box>
  );
};

export default Home;
