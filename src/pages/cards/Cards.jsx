import { Box, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/profile.png";
import "../cards/Cards.css";

const Cards = () => {
  return (
    <Box mt={10} width="100%">
      <Box>
        <Typography className="expertise" variant='h5' display='flex' justifyContent='center'>My Expertise</Typography>
        <Box my={2} display='flex' justifyContent='center' gap={2}>
        <Box height={150} width="100%" p={2} bgcolor='red' borderRadius={3} display='flex' justifyContent='center' alignItems='center' >
          <Box display='flex' justifyContent='center' gap={2}>
         <Box py={2} px={1.3} bgcolor='yellow' borderRadius={8}>
          img
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center'>
         Provide Wide Range of
         </Box>
         </Box>
          </Box>
          <Box height={150} width="100%" p={2} bgcolor='red' borderRadius={3} display='flex' justifyContent='center' alignItems='center' >
          <Box display='flex' justifyContent='center' gap={2}>
         <Box py={2} px={1.3} bgcolor='yellow' borderRadius={8}>
          img
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center'>
         Provide Wide Range of
         </Box>
         </Box>
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' gap={2}>
        <Box height={150} width={300} p={2} bgcolor='red' borderRadius={3}>
          <Box display='flex' justifyContent='center' gap={2}>
         <Box py={2} px={1.3} bgcolor='yellow' borderRadius={8}>
          img
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center'>
         Provide Wide Range of
         </Box>
         </Box>
          </Box>
          <Box height={150} width={300} p={2} bgcolor='red' borderRadius={3}>
          <Box display='flex' justifyContent='center' gap={2}>
         <Box py={2} px={1.3} bgcolor='yellow' borderRadius={8}>
          img
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center'>
         Provide Wide Range of
         </Box>
         </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
