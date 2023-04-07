import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Skill = () => {
  return (
    <Box mt={10} width="100%">
    <Box>
    
      <Box p={2} className='skill'>
      <Typography
      mt={5}
       color='#6f34fe'
        variant="span"
        fontSize={30}
        fontWeight='bold'
        display="flex"
        justifyContent="center"
      >
        My Skills
      </Typography>
      <Box display='flex' flexDirection={{lg:'row',xs:'column'}} justifyContent='center' gap={2}>
        <Box>
        <Box display='flex' justifyContent='start' flexDirection={{lg:'row',xs:'column'}} gap={4}>
            <Box height={200} width={200} bgcolor='red' p={3} borderRadius={3}>1</Box>
            <Box height={200} width={200} bgcolor='red' p={3} borderRadius={3}>2</Box>
            </Box>
            <Box my={4} display='flex' flexDirection={{lg:'row',xs:'column'}} justifyContent='start' gap={4}>
            <Box height={200} width={200} bgcolor='red' p={3} borderRadius={3}>1</Box>
            <Box height={200} width={200} bgcolor='red' p={3} borderRadius={3}>2</Box>
            </Box>
        </Box>
        <Box p={3}>
            <Box py={2}>
              <Typography variant='h5'> Frontend :</Typography> <Button sx={{bgcolor:'red'}} variant='contained'>React</Button> { ' '}<Button variant='contained' sx={{bgcolor:'#fca61f'}}>React</Button>{ ' '}<Button variant='contained'>React</Button>
            </Box>
            <Box  py={2}>
            <Typography variant='h5'> Backend :</Typography> <Button sx={{bgcolor:'red'}} variant='contained'>React</Button> { ' '}<Button variant='contained'>React</Button>{ ' '}<Button variant='contained'>React</Button>
            </Box>
            <Box  py={2}>
            <Typography variant='h5'> Language :</Typography> <Button sx={{bgcolor:'red'}} variant='contained'>React</Button> { ' '}<Button variant='contained'>React</Button>{ ' '}<Button variant='contained'>React</Button>
            </Box>
            <Box  py={2}>
            <Typography variant='h5'> Other :</Typography> <Button sx={{bgcolor:'red'}} variant='contained'>React</Button> { ' '}<Button variant='contained'>React</Button>{ ' '}<Button variant='contained'>React</Button>
            </Box>
        </Box>
      </Box>
        </Box>
        </Box>
        </Box>
  )
}

export default Skill