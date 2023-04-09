import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Box mt={10}>
      <Typography
        color="#6f34fe"
        variant="span"
        fontSize={20}
        fontWeight="bold"
        display="flex"
        justifyContent="center"
      >
        Get in Touch
      </Typography>
      <Typography
        color="#3f396d"
        variant="span"
        fontSize={35}
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        py={4}
      >
        Any Questions? Feel Free to Contact
      </Typography>
      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        gap={2}
        width="100%"
        overflow='hidden'
      >
        <Box
          bgcolor="#6f34fe"
          borderRadius={3}
          color="white"
          width={{ lg: "30%", xs: "100%" }}
        >
          <Box p={3.5}>
            <Box py={1} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <LocationOnIcon fontSize="large"/>
              </Box>
              <Box>
                <Typography variant="h5" py={1} fontSize={20} fontWeight="bold">
                  Address:
                </Typography>
                <Typography variant="span" lineHeight={1.4}>
                  House No-63, Road No-19,Sector-11, Uttara.
                </Typography>
              </Box>
            </Box>
            <Box py={2} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <EmailIcon fontSize="large"/>
              </Box>
              <Box>
                <Typography variant="h5" py={1} fontSize={20} fontWeight="bold">
                  Email:
                </Typography>

                <Typography variant="span" lineHeight={1.4}>
                  shahnajparven21@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box py={3} display="flex" gap={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={30}
                width={30}
                borderRadius={15}
                bgcolor="#fca61f"
                p={2}
              >
                <LocalPhoneIcon fontSize="large"/>
              </Box>
              <Box>
                <Typography variant="h5" py={1} fontSize={20} fontWeight="bold">
                  Phone:
                </Typography>

                <Typography variant="span" lineHeight={1.4}>
                  +880 1745001556 <br />
                  +880 1641896874
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="70%">
          <Box>
          <Box display='flex' gap={2} my={2}>
          <TextField type="text" p={2} />
          
          <TextField type="text" p={2} />
          </Box>
          <Box  display='flex' gap={2} my={2}>
          <TextField type="text" p={2} />
         
          <TextField type="text" p={2} />
          </Box>
          <TextField type="text" p={2} />
          </Box>
          <Box py={2}>
          <Button variant="contained" sx={{bgcolor:'#fca61f',px:5}}>Submit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
