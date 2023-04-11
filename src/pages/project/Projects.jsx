import * as React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import houseRenting from '../../assets/portfolio/webdevelopment.png';
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
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platfrom
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained">React</Button>{" "}
                    <Button variant="contained">React</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platfrom
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained">React</Button>{" "}
                    <Button variant="contained">React</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box py={5}>
                  {" "}
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platfrom
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained">React</Button>{" "}
                    <Button variant="contained">React</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2}>
                <Box
                  bgcolor="white"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platfrom
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained">React</Button>{" "}
                    <Button variant="contained">React</Button>
                  </Box>
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
                  Img
                </Box>
                <Box py={5}>
                  <Typography
                    variant="h5"
                    fontSize={20}
                    fontWeight="bold"
                    color="#3f396d"
                  >
                    Online House Renting Platfrom
                  </Typography>
                  <Box py={2}>
                    <Button variant="contained">React</Button>{" "}
                    <Button variant="contained">React</Button>
                  </Box>
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
