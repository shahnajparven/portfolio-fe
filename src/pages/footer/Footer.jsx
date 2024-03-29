import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box bgcolor="#211e39" mt={10} className="footer2">
      <Box
        className="footer"
        display="grid"
        justifyContent="center"
        alignItems="center"
        color="lightgray"
      >
        <Box width="100%">
          <Box py={8} display="grid" justifyContent="center">
            <Typography
              display="flex"
              justifyContent="center"
              variant="h5"
              py={2}
            >
              Shahnaj Parven
            </Typography>

            <Typography
              display="flex"
              justifyContent="center"
              variant="span"
              py={2}
            >
              Home | About | Expertise | Skill | Project | Contact
            </Typography>
            <Box display="flex" justifyContent="center" gap={2}>
              {" "}
              <Link to="https://www.facebook.com/shahnaj.ritu.5/">
                <Box
                  height={30}
                  width={30}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="#326da8"
                >
                  <FacebookIcon />
                </Box>
              </Link>
              <Link to="https://www.instagram.com/shahnaj_ritu/">
                <Box
                  height={30}
                  width={30}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="red"
                >
                  <InstagramIcon />
                </Box>
              </Link>
              <Link to="https://github.com/shahnajparven">
                <Box
                  height={30}
                  width={30}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="black"
                >
                  <GitHubIcon />
                </Box>
              </Link>
              <Link to="https://www.linkedin.com/in/shahnaj-parven/">
                <Box
                  height={30}
                  width={30}
                  borderRadius={15}
                  bgcolor="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  color="#20a5e3"
                >
                  <LinkedInIcon />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="gray" mx={20}>
        <Divider />
      </Box>
      <Box
        py={3}
        display="flex"
        justifyContent="center"
        color="gray"
        variant="span"
      >
       <CopyrightIcon fontSize="small"/> <Typography variant="span"mt='3px' px={.8}>Copyright 2023 | All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
