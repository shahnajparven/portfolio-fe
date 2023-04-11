import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <Box width='100%' className="header" overflow='hidden' position='fixed'>
      <Box
        display="flex"
        justifyContent="space-between"
        px={{lg:12,md:12,sm:2,xs:2}}
      >
        <Box className="logo-name" sx={{ cursor: "pointer"}} >
          <Link to='/'>
          <h5>
            Shahnaj
            <span className="logo-span">Parven</span>
          </h5>
          </Link>
        </Box>
        <Box
          mt={5}
          display={{ xs: "flex", sm: "flex", lg: "none" }}
          color="#fca61f"
        >
          <MenuIcon fontSize="large" />
        </Box>
        <Box mt={2.5} gap={2} display={{ xs: "none", sm: "none", lg: "flex" }}>
          <Box className="header-list">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
            </ul>
             
          </Box>
          <Box mt={3}>
            <Box
              px={5}
              py={1.5}
              bgcolor="#fca61f"
              color="#ffffff"
              borderRadius="30px"
              className="hire-me"
              sx={{ cursor: "pointer" }}
            >
              <a href="#contact">Contact</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
