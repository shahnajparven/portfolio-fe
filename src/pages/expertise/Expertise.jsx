import { Box, Button, Typography } from "@mui/material";
import React from "react";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Cards from "../cards/Cards";

const Expertise = () => {
  return (
    <Box width="100%" id="expertise">
      <Box>
        <Typography
          color="#6f34fe"
          variant="span"
          fontSize={30}
          fontWeight="bold"
          display="flex"
          justifyContent="center"
        >
          My Expertise
        </Typography>
        <Box p={2}>
          <Box
            my={4}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={4}
          >
            <Cards
              emoji={<WebIcon fontSize="large" />}
              heading="Web Design"
              detail="Expert of Frontend development including techniques like Bootstrap,jQuery..."
              skill={
                <Box>
                  <Button
                    sx={{ bgcolor: "#3f396d", my: 1 }}
                    variant="contained"
                  >
                    HTML5
                  </Button>{" "}
                  <Button
                    sx={{ bgcolor: "#6f34fe", my: 1 }}
                    variant="contained"
                  >
                    CSS3
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#fca61f", my: 1 }}
                  >
                    Bootstrap
                  </Button>{" "}
                  <Button
                    sx={{ bgcolor: "#3f396d", my: 1 }}
                    variant="contained"
                  >
                    Sass
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#6f34fe", my: 1 }}
                  >
                    Tailwind CSS
                  </Button>{" "}
                  <Button
                    sx={{ bgcolor: "#fca61f", my: 1 }}
                    variant="contained"
                  >
                    ReactJs
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#3f396d", my: 1 }}
                  >
                    NextJs
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#6f34fe", my: 1 }}
                  >
                    Material Ui
                  </Button>{" "}
                  <Button
                    sx={{ bgcolor: "#fca61f", my: 1 }}
                    variant="contained"
                  >
                    Redux
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#3f396d", my: 1 }}
                  >
                    Redux Toolkit
                  </Button>{" "}
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#6f34fe", my: 1 }}
                  >
                    Context API
                  </Button>{" "}
                  <Button
                    sx={{ bgcolor: "#fca61f", my: 1 }}
                    variant="contained"
                  >
                    React Query
                  </Button>{" "}
                </Box>
              }
            />
            <Cards
              emoji={<CodeIcon fontSize="large" />}
              heading="Web Development"
              detail="For Developing a side used NodeJs, ExpressJs, MongoDB, MySQL database,PHP..."
           skill={<Box>
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
            }
           />
          </Box>
          <Box
            my={4}
            display="flex"
            justifyContent="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={4}
          >
            <Cards
              emoji={<SubtitlesIcon fontSize="large" />}
              heading="UI/UX Design"
              detail="Figma, Adobe XD using for UI/UX design..."
              skill={<Box>
                <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
                Figma
                </Button>{" "}
                <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
                Adobe XD
                </Button>{" "}
                
                </Box>
                }
            />
            <Cards
              emoji={<WebAssetIcon fontSize="large" />}
              heading="Graphic Design"
              detail="Photoshop and Illustator using for Graphic Design..."
              skill={<Box>
                <Button sx={{ bgcolor: "#3f396d", my: 1 }} variant="contained">
                Photoshop
                </Button>{" "}
                <Button sx={{ bgcolor: "#6f34fe", my: 1 }} variant="contained">
                Illustator
                </Button>{" "}
                
                </Box>
                }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Expertise;
