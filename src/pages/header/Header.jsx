import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import $ from "jquery";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  $(window).scroll(function () {
    $(".header").toggleClass("scrolled", $(this).scrollTop() > 80);
  });

  return (
    <Box width="100%" className="header">
      <Box
        display="flex"
        justifyContent="space-between"
        px={{ lg: 12, md: 2, sm: 2, xs: 2 }}
      >
        <Box className="logo-name" sx={{ cursor: "pointer" }}>
          <Link to="/">
            <h5>
              Shahnaj
              <span className="logo-span">Parven</span>
            </h5>
          </Link>
        </Box>
        
        
        <Box mt={2} gap={2} className="navList" display="flex">
        <input type="checkbox" id="check" className="menu-toggle" hidden />

<label htmlFor="check">
  <Box id="btn">
    <MenuIcon fontSize="large" />
  </Box>
  <Box id="cancel">
    <CloseIcon fontSize="large" />
  </Box>
</label>

        {/* <label for="check">
          <Box id="btn">
            <MenuIcon fontSize="large" />
          </Box>
          <Box id="cancel">
            <CloseIcon fontSize="large" />
          </Box>
        </label> */}
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
              <li>
                <Box>
                  <Box
                    px={5}
                    py={1.5}
                    bgcolor="#fca61f"
                    color="white"
                    borderRadius="30px"d
                    className="hire-me"
                    sx={{ cursor: "pointer"}}
                  >
                    <a href="#contact">Contact</a>
                  </Box>
                </Box>
              </li>
             
             
              
            </ul>
           
          </Box>
         
        </Box>
        {/* <Box mt={2} gap={2} className="navList" display="flex" alignItems="center">
  <input type="checkbox" id="check" className="menu-toggle" hidden />

  <label htmlFor="check">
    <Box id="btn">
      <MenuIcon fontSize="large" />
    </Box>
    <Box id="cancel">
      <CloseIcon fontSize="large" />
    </Box>
  </label>

  <Box className="header-list">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#expertise">Expertise</a></li>
      <li><a href="#skill">Skill</a></li>
      <li><a href="#project">Project</a></li>
      <li>
        <Box>
          <Box
            px={5}
            py={1.5}
            bgcolor="#fca61f"
            color="white"
            borderRadius="30px"
            className="hire-me"
            sx={{ cursor: "pointer" }}
          >
            <a href="#contact">Contact</a>
          </Box>
        </Box>
      </li>
    </ul>
  </Box>
</Box> */}

      </Box>
    </Box>
  );
};

export default Header;
