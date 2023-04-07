import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
    <Box display='flex' justifyContent='space-between' className='header'>
      <Box className="logo-name">
        <h5>
          Shahnaj
          <span className="logo-span" >
            Parven
          </span>
        </h5>
      </Box>
      <Box mt={5} display={{xs:'flex',sm:'flex', lg:'none'}} color="#fca61f"><MenuIcon fontSize="large" /></Box>
      <Box mt={2.5} gap={2} display={{xs:'none',sm:'none', lg:'flex'}}>
      <Box className='header-list' >
        <ul>
          <li >
            <a href="index.html">
              Home
            </a>
          </li>
          <li >
            <a href="#service-con">
              Services
            </a>
          </li>
          <li >
            <a href="#about-con">
              About
            </a>
          </li>
          <li>
            <a href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li >
            <a href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>
        </Box >
        <Box mt={3}>
        <Box px={5} py={1.5} bgcolor='#fca61f' color='#ffffff' borderRadius="30px" className='hire-me'>Contact</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
