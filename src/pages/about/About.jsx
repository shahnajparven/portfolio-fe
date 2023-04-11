import { Typography, Box, Button } from "@mui/material";
import React from "react";
import pic from "../../assets/about-img.png";
import halfCircle from "../../assets/circle-left-img.png";
import comma from "../../assets/comma-icon.png";

const About = () => {
  return (
    <Box width="100%" height='100vh' id="about" display="flex" justifyContent='center' alignItems='center'>
      <Box display="flex" gap={5} flexDirection={{lg:'row',sm:'column',md:'row',xs:'column'}} position='relative'>
        <Box display="flex" justifyContent='center' overflow='hidden' width={{lg:'50%',xs:'100%'}} py={5} className="half-circle">
        
        {/* <Box className="half-circle">
          <img src={halfCircle} alt="half-circle" height={300} width/>
        </Box> */}
        
        <Box className="about-image"  display='flex' justifyContent='center'>
          <img src={pic} alt="about-img" height={300} />
        </Box>
        </Box>
       
        <Box mt={2} width="100%" overflow='hidden' >
          <Typography
            color="#6f34fe"
            variant="span"
            fontSize={20}
            fontWeight="bold"
            display='flex'
            justifyContent={{lg:'start',xs:'center'}}
          >
            About Me
          </Typography>
          <Typography
            color="#3f396d"
            py={1}
            variant="h2"
            fontSize={40}
            fontWeight="bold"
            display='flex'
            justifyContent={{lg:'start',xs:'center'}}
          >
            Shahnaj Parven
          </Typography>
          <Box display="flex" my={2}>
            <Typography variant="span" px={2}>
              <img src={comma} />
            </Typography>
            <Typography pr={{ lg: 12, md: 12, sm: 2, xs: 2 }}  display='flex'
            justifyContent={{lg:'start',xs:'center'}} color="#3f396d" py={1} variant="span" fontSize={20} lineHeight={1.5}>
              I am a Software Developer ,I like Development,learn with new
              technology and exploring new things.I love to solve problems based on web development. I have completed my B.sc from Computer Science Engineering (CSE).
            </Typography>
            
          </Box>
          <Box display='flex'
            justifyContent={{lg:'start',xs:'center'}} >
          <Button  sx={{bgcolor:'#fca61f', mx:9, px:5, py:1,color:'white',borderRadius:5,}}>Download CV</Button>
          </Box>
        </Box> 
      </Box>
    </Box>
  );
};

export default About;
