import { Box, Typography } from "@mui/material";
import React from "react";
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Cards from "../cards/Cards";

const Expertise = () => {
  return (
    <Box mt={10} width="100%">
      <Box>
        <Typography
         color='#6f34fe'
          variant="span"
          fontSize={30}
          fontWeight='bold'
          display="flex"
          justifyContent="center"
        >
          My Expertise
        </Typography>
        <Box p={2}>
        <Box my={4} display="flex" justifyContent="center" flexDirection={{lg:'row', md:'row',sm:'column',xs:'column'}} gap={4}>
              <Cards
                emoji={<WebIcon fontSize="large"/>}
                heading="Web Design"
                detail="Provide Wide Range of  Provide Wide Range of  Provide Wide Range of ."
              /> 
               <Cards
                emoji={<CodeIcon fontSize="large"/>}
                heading="Web Development"
                detail="Provide Wide Range of  Provide Wide Range of  Provide Wide Range of ."
              />              
               </Box>
               <Box my={4} display="flex" justifyContent="center" flexDirection={{lg:'row', md:'row',sm:'column',xs:'column'}}   gap={4}>         
              <Cards
                emoji={<SubtitlesIcon fontSize="large"/>}
                heading="UI/UX Design"
                detail="Provide Wide Range of  Provide Wide Range of  Provide Wide Range of ."
              />        
               <Cards
                emoji={<WebAssetIcon fontSize="large"/>}  
                heading="Graphic Design"
                detail="Provide Wide Range of  Provide Wide Range of  Provide Wide Range of ."
              />    
               </Box>
               </Box>
          </Box>
        </Box>
   
    
  );
};

export default Expertise;