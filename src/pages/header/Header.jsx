import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <Box width="100%" className="header" position="fixed">
      <Box
        px={{ lg: 12, md: 12, sm: 2, xs: 2 }}
        display="flex"
        justifyContent="space-between"
      >
        <Box className="logo-name">
          <h5>
            Shahnaj
            <span className="logo-span">Parven</span>
          </h5>
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
                <a href="home">Home</a>
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
            >
              Contact
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
