import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import houseRenting from '../../assets/portfolio/webdevelopment.png';
import education from '../../assets/portfolio/education.png';
import hosting from '../../assets/portfolio/hosting.png';
import market from '../../assets/portfolio/market.png';
import airline from '../../assets/portfolio/airline.png';
import dashboard from '../../assets/portfolio/dashboard.png';
import ecommerce from '../../assets/portfolio/ecommerce.png';
import atrip from '../../assets/portfolio/atrip.png';
import todo from '../../assets/portfolio/todo.png';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Box mt={8} width="100%" id="project">
      <Box>
        <Typography
          color="#3f396d"
          variant="span"
          fontSize={30}
          fontWeight="bold"
          display="flex"
          justifyContent="center"
        >
          My Projects
        </Typography>
        <Box p={2} mt={2}>
          <Grid container spacing={5}>

          <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to="https://sparkling-marzipan-09dba6.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={ecommerce} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                 Ecommerce Site
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>React</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Stripe</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>Material Ui</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>Redux toolkit</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>NodeJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>ExpressJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>MongoDB</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Cloudinary</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>React hook</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/ecommerce">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to="https://netlify-blogging-site.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={atrip} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                Travel Site
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>React</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Stripe</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>Material Ui</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>Redux toolkit</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>NodeJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>ExpressJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>MongoDB</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Cloudinary</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>React hook</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/travel-project">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to="https://bespoke-trifle-d17f05.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={todo} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                Online Course Site
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>React</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Stripe</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>Material Ui</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>Redux toolkit</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>NodeJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>ExpressJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>MongoDB</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Cloudinary</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>React hook</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/todo-frontend">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to='https://mern-renthouse.herokuapp.com/'>
                <Box
                  bgcolor="white"
                  // width="100%"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={houseRenting} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platform
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>React</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>Material Ui</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>Redux</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>NodeJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>ExpressJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Stripe</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>MongoDB</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Cloudinary</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/mernProjectRenthouse">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
           
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to="https://glittery-figolla-f1c5ee.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={dashboard} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                 Admin Dashboard of Shop Bd
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>React</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>Material Ui</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#3f396d", my: 1 }}>Redux</Button>{" "}
                    <Button variant="contained"  sx={{ bgcolor: "#6f34fe", my: 1 }}>NodeJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>ExpressJs</Button>{" "}
                    <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>MongoDB</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/dashboard">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
              <Link to="https://funny-wisp-48f11f.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                   <img src={education} width="100%" height='auto' overflow='hidden'/>
                  
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Education Management
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Html5</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Css3</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>JavaScript</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>JQuery</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/education-society">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
             
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to="https://lighthearted-sunflower-28e89c.netlify.app/">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={market} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Market Bangla Online Shop
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Html5</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Css3</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Bootstrap</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>JavaScript</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>JQuery</Button>{" "}
                  
                  </Box>
                  <Link to="https://github.com/shahnajparven/ecommerce-project">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Link to='https://clinquant-clafoutis-c67759.netlify.app/'>
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  
                  <img src={hosting} width="100%" height='auto' overflow='hidden'/>
                </Box>
                </Link>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Web Hosting Site
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Html5</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Css3</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>JavaScript</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>JQuery</Button>{" "}
                  </Box>
                  <Link to="https://github.com/shahnajparven/joomhost-design">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={2} className="project-card">
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img src={airline} width="100%" height='auto' overflow='hidden'/>
                </Box>
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Airlines Management
                  </Typography>
                  <Box py={2}>
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Html5</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>Css3</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>Bootstrap</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>JavaScript</Button>{" "}
                  <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>JQuery</Button>{" "}
                  </Box>
                  <Link to="">
                  <Box display='flex' justifyContent='center' border={1} p={1}>Github</Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
