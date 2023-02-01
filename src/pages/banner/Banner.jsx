import { Box } from "@mui/system";
import React from "react";
import profile from "../../assets/profile.png";
import "../Home.css";
const Banner = () => {
  return (
    <Box display="flex" gap={1}>
      
      <Box mt={15} className='banner-text'>
      
     
        <Box className="banner-heading">
       
          <Box className="dynamic-txt">
            <Box my={3}>
            <span>Hello, I Am</span>
            </Box>
            <b>Shahnaj Parven</b>
          </Box>
          <p>
            I am a Full-Stack MERN Developer. I have completed my B.sc from
            Computer Science Engineering (CSE).
          </p>
        </Box>
        <Box display='flex' gap={3} mt={5}>
          <Box px={5} py={1.5} bgcolor='#fca61f' color='#fffff' borderRadius="30px" className='hire-me'>
            <a href="#Contact">Hire Me</a>
          </Box>
          <Box mt={1} borderBottom={2} borderColor="#6f34fe">
          <a href="#Portfolio" class="See-btn">
            See My Work
          </a>
          </Box>
        </Box>
        
      </Box>
      <Box>
        <img src={profile} height={545} overflow='hidden' width={485}/>
      </Box>
    </Box>
  );
};

export default Banner;
