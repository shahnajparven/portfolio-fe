import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Projects = () => {
  return (
    <Box mt={8} width="100%">
      <Box>
        <Typography
          color="#6f34fe"
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
              <Box className='project-card' p={5}>card1</Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5} className='project-card'>card2</Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5} className='project-card'>card3</Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5} className='project-card'>card4</Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5}className='project-card'>card5</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
