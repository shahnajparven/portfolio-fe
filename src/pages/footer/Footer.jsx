import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box bgcolor="#211e39" mt={10} className='footer2'>
      <Box
        className="footer"
        display="grid"
        justifyContent="center"
        alignItems="center"
        color="lightgray"
      >
        <Box width="100%">
          <Box py={8} display="grid" justifyContent='center'>
            <Typography display="flex" justifyContent='center' variant="h5" py={2}>Shahnaj Parven</Typography>

            <Typography display="flex" justifyContent='center' variant="span" py={2}>Home  |  About  |  Expertise  |  Skill  |  Project  |  Contact</Typography>
            <Box display="flex" justifyContent='center' gap={2}>
              {" "}
              <Box height={30} width={30} borderRadius={15} bgcolor='white' display="flex" justifyContent='center' alignItems='center' p={1} color='#326da8'><FacebookIcon /></Box>
              <Box height={30} width={30} borderRadius={15} bgcolor='white' display="flex" justifyContent='center' alignItems='center' p={1} color='red'><InstagramIcon/></Box>
              <Box height={30} width={30} borderRadius={15} bgcolor='white' display="flex" justifyContent='center' alignItems='center' p={1} color='#20a5e3'><LinkedInIcon/></Box>
       
            </Box>
          </Box>
          
        </Box>
        
      </Box>
      <Box bgcolor="gray" mx={20}>
            <Divider />
          </Box>
          <Box py={3} display="flex" justifyContent='center' color='gray' variant='span'>Copyright 2023 Shahnaj Parven | All Rights Reserved.</Box>
    </Box>
  );
};

export default Footer;
