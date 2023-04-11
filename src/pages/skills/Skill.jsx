import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Skill = () => {
  return (
    <Box py={5} px={{ lg: 12, md: 12, sm: 2, xs: 2 }}>
      <Box display="flex" flexDirection={{ lg: "row", xs: "column" }} gap={2}>
        <Box width="100%" overflow="hidden" display="grid" justifyContent='center'>
          <Typography
            my={5}
            color="#6f34fe"
            variant="span"
            fontSize={20}
            fontWeight="bold"
            display="flex"
            justifyContent="center"
          >
            My Skills
          </Typography>
          <Box
            width="100%"
            overflow="hidden"
            display="flex"
            justifyContent="start"
            flexDirection="row"
            gap={4}
            alignItems="center"
          >
            <Box
              className="skill-card"
              height={100}
              width={{ lg: 100, xs: "100%" }}
              bgcolor="white"
              p={3}
              borderRadius={3}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  p={2}
                  color="#6f34fe"
                  fontWeight="bold"
                >
                  95
                  <Typography variant="span" color="#fca61f">
                    %
                  </Typography>
                </Typography>
                <Typography variant="span" p={1} color="#3f396d">
                  Frontend
                </Typography>
              </Box>
            </Box>
            <Box
              className="skill-card"
              height={100}
              width={{ lg: 100, xs: "100%" }}
              bgcolor="white"
              p={3}
              borderRadius={3}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  p={2}
                  color="#6f34fe"
                  fontWeight="bold"
                >
                  80
                  <Typography variant="span" color="#fca61f">
                    %
                  </Typography>
                </Typography>
                <Typography variant="span" p={1} color="#3f396d">
                  Backend
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            my={4}
            display="flex"
            flexDirection="row"
            justifyContent="start"
            gap={4}
            alignItems="center"
            width="100%"
          >
            <Box
              className="skill-card"
              height={100}
              width={{ lg: 100, xs: "100%" }}
              bgcolor="white"
              p={3}
              borderRadius={3}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  p={2}
                  color="#6f34fe"
                  fontWeight="bold"
                >
                  75
                  <Typography variant="span" color="#fca61f">
                    %
                  </Typography>
                </Typography>
                <Typography variant="span" p={1} color="#3f396d">
                  Languages
                </Typography>
              </Box>
            </Box>
            <Box
              className="skill-card"
              height={100}
              width={{ lg: 100, xs: "100%" }}
              bgcolor="white"
              p={3}
              borderRadius={3}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  p={2}
                  color="#6f34fe"
                  fontWeight="bold"
                >
                  70
                  <Typography variant="span" color="#fca61f">
                    %
                  </Typography>
                </Typography>
                <Typography variant="span" p={1} color="#3f396d">
                  Others
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="100%" overflow="hidden">
          <Box>
            <Typography
              variant="h5"
              py={2}
              fontSize={20}
              fontWeight="bold"
              color="#3f396d"
            >
              {" "}
              Frontend{" "}
            </Typography>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              HTML5
            </Button>{" "}
            <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
              CSS3
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#fca61f", my: 1 }}>
              Bootstrap
            </Button>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              Sass
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>
              Tailwind CSS
            </Button>{" "}
            <Button sx={{ bgcolor: "#fca61f", my: 1 }} variant="contained">
              ReactJs
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>
              NextJs
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>
              Material Ui
            </Button>{" "}
            <Button sx={{ bgcolor: "#fca61f", my: 1 }} variant="contained">
              Redux
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#3f396d", my: 1 }}>
              Redux Toolkit
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#6f34fe", my: 1 }}>
              Context API
            </Button>{" "}
            <Button sx={{ bgcolor: "#fca61f", my: 1 }} variant="contained">
              React Query
            </Button>{" "}
          </Box>
          <Box>
            <Typography
              variant="h5"
              py={2}
              fontSize={20}
              fontWeight="bold"
              color="#3f396d"
            >
              {" "}
              Backend{" "}
            </Typography>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              NodeJs
            </Button>{" "}
            <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
              ExpressJs
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#fca61f", my: 1 }}>
              MongoDB
            </Button>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              Firebase
            </Button>
          </Box>
          <Box>
            <Typography
              variant="h5"
              py={2}
              fontSize={20}
              fontWeight="bold"
              color="#3f396d"
            >
              {" "}
              Languages{" "}
            </Typography>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              JavaScript
            </Button>{" "}
            <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
              PHP
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#fca61f", my: 1 }}>
              C
            </Button>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              Java
            </Button>{" "}
          </Box>
          <Box>
            <Typography
              variant="h5"
              py={2}
              fontSize={20}
              fontWeight="bold"
              color="#3f396d"
            >
              {" "}
              Others{" "}
            </Typography>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              Git
            </Button>{" "}
            <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
              GitHub
            </Button>{" "}
            <Button variant="contained" sx={{ bgcolor: "#fca61f", my: 1 }}>
              Figma
            </Button>{" "}
            <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
              Adobe XD
            </Button>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;
