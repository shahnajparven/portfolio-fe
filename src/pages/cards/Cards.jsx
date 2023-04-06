import { Box, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/profile.png";
import "../cards/Cards.css";

const Cards = () => {
  return (
    <Box mt={10} width="100%">
      <Box>
        <h4>My Expertise</h4>
        <Box display='flex' justifyContent='center' gap={2}>
        <Box>
          Provide Wide Range of
          </Box>
         <Box>
          Digital Services
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
