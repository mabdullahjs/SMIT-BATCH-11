import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiFillCloseSquare } from "react-icons/ai";
import { FaDribbble } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';

const Home = () => {
  return (
    <Box sx={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  }}>
      <Typography variant='h2'>Home!</Typography>
      <Typography variant='h3'><AiFillCloseSquare /> <FaDribbble /><VscAzureDevops className='text-primary' />
      </Typography>


  </Box>
  )
}

export default Home