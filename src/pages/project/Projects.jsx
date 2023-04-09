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
              <Box className="project-card" p={2} width="100%">
                <Box
                  bgcolor="red"
                  width="100%"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box p={5}>details</Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2} width="100%">
                <Box
                  bgcolor="red"
                  width="100%"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box p={5}>details</Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box className="project-card" p={2} width="100%">
                <Box
                  bgcolor="red"
                  width="100%"
                  height={300}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Img
                </Box>
                <Box p={5}>details</Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5} className="project-card">
                card4
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box p={5} className="project-card">
                card5
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
