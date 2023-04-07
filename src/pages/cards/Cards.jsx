import { Box, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/profile.png";
import "../cards/Cards.css";

const Cards = ({emoji,heading,detail}) => {
  return (
    
    <Box
    bgcolor='white'
            height={150}
            p={4}
            // boxShadow={1}
            borderRadius={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
         <Box py={5} px={5} bgcolor='#fca61f' borderRadius={15} color='white'>
          {emoji}
         </Box>
         <Box lineHeight={1.5}>
          <Typography variant="span"
          fontSize={25} color='#3f396d' fontWeight='bold'>{heading}</Typography>
          <Box mt={2} color='gray'>{detail} </Box>
          <Box my={1} color='#fca61f'> Read More</Box>
         </Box>
         </Box>
         
        //  <Box height={150} width="100%" p={4} boxShadow={2} borderRadius={3} display='flex' justifyContent='center' alignItems='center' > 
        // <Box display='flex' justifyContent='center' gap={5}>
        //  <Box py={6} px={5} bgcolor='yellow' borderRadius={15}>
        //   img
        //  </Box>
        //  <Box lineHeight={1.5}>
        //   <Typography variant="h5">Web Development</Typography>
        //   <Box mt={2}>Provide Wide Range of  Provide Wide Range of  Provide Wide Range of  Provide Wide Range of . </Box>
        //  </Box>
        //  </Box>
        //   </Box>
        // </Box>
        // <Box display='flex' justifyContent='center' gap={2}>
        // <Box height={150} width="100%" p={4} boxShadow={2} borderRadius={3} display='flex' justifyContent='center' alignItems='center' >
        //   <Box display='flex' justifyContent='center' gap={5}>
        //  <Box py={6} px={5} bgcolor='yellow' borderRadius={15}>
        //   img
        //  </Box>
        //  <Box lineHeight={1.5}>
        //   <Typography variant="h5">Web Design</Typography>
        //   <Box mt={2}>Provide Wide Range of  Provide Wide Range of  Provide Wide Range of  Provide Wide Range of . </Box>
        //  </Box>
        //  </Box>
        //   </Box>
        //   <Box height={150} width="100%" p={4} boxShadow={2} borderRadius={3} display='flex' justifyContent='center' alignItems='center' >
        //   <Box display='flex' justifyContent='center' gap={5}>
        //  <Box py={6} px={5} bgcolor='yellow' borderRadius={15}>
        //   img
        //  </Box>
        //  <Box lineHeight={1.5}>
        //   <Typography variant="h5">Web Design</Typography>
        //   <Box mt={2}>Provide Wide Range of  Provide Wide Range of  Provide Wide Range of  Provide Wide Range of . </Box>
        //  </Box>
        //  </Box> 
        //   </Box>
        
   
  );
};

export default Cards;
