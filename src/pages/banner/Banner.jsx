import { Box, Link, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import "../Home.css";
import { motion } from "framer-motion";
const Banner = ({ scaling }) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setSmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setSmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <Box mt={16} width='100%' display="flex" gap={2} justifyContent='center' flexDirection={{lg:"row",md:'column',sm:'column',xs:'column'}}>
      <Box mt={{lg:15,md:10,sm:2,xs:2}} className="banner-text" overflow='hidden'>
        <Box className="banner-heading" >
          <Box className="dynamic-txt">
            <Box my={3} >
              <span >Hello, I Am</span>
            </Box>
            <b>Shahnaj Parven</b>
          </Box>
          <p>
            I am a Full-Stack MERN Developer.
          </p>
        </Box>
        <Box display="flex" gap={3} mt={5} justifyContent={{lg:'left',md:'left',sm:'left',xs:'center'}}>
          <Box
            px={5}
            py={1.5}
            bgcolor="#fca61f"
            borderRadius="30px"
            className="hire-me"
            color='white'
          >
            <a href="#Contact">Hire Me</a>
          </Box>
          <Box mt={1} borderBottom={2} borderColor="#6f34fe">
            <a href="#Portfolio" class="See-btn">
              See My Work
            </a>
          </Box>
        </Box>
      </Box>
    
      <Box display="flex" justifyContent='center' className="banner-right-con wow slideInRight" id="banner-right-con">
        <img
          src={profile}
          height={568}
          overflow="hidden"
          width={{lg:485,sm:'100%', xs:'100%'}}
          alt="banner-right-img"
          id="banner-right-img"
        />
      </Box>
      <motion.div
          animate={{
            x: largeCircle.x - 32,
            y: largeCircle.y - 32,
            transition: { type: "spring", mass: 3 },
          }}
          className="large_circle"
          style={{ scale: scaling ? 0.1 : 1 }}
        />
        <motion.div
          animate={{
            x: smallcircle.x - 8,
            y: smallcircle.y - 8,
            transition: { type: "spring", mass: 2 },
          }}
          className="small_circle"
        />
    </Box>
  );
};

export default Banner;
