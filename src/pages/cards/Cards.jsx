import { Box, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/profile.png";
import "../cards/Cards.css";

const Cards = () => {
  return (
    <Box mt={10} width="100%">
      <Box >
        <h4 className="experience">My Expertise</h4>
        <h2 class="mb-0">
          Provide Wide Range of
          <br />
          Digital Services
        </h2>
      </Box>
    </Box>
  );
};

export default Cards;
