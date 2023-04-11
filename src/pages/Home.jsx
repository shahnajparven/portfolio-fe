import { Box } from "@mui/material";
import React from "react";
import About from "./about/About";
import Banner from "./banner/Banner";
import Expertise from "./expertise/Expertise";
import Header from "./header/Header";
import "./Home.css";
import Projects from "./project/Projects";
import Skill from "./skills/Skill";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <Box>
    <Box className="container">
      <Header/>
      <Box mt={16}>
      <Banner/>
      </Box>
      </Box>
     
        <About/>
        <Box px={{lg:12,md:12,sm:2,xs:2}}>
      <Expertise/>
    
      </Box>
      <Box className='skill'>
      <Skill/>
      </Box> 
       <Box px={{lg:12,md:12,sm:2,xs:2}}>
      <Projects/>
      <Contact/>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Home;
