import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from '../components/Card'

const Product = () => {
  const [students , setStudents] = useState(null)
  useEffect(() => {
    axios(`https://course-admission-portal.vercel.app/api/v1/student`)
      .then((res) => {
        console.log(res.data)
        setStudents(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <Box>
      <Typography className='text-center m-3' variant='h4'>All Students!</Typography>
      <Box className="container d-flex justify-content-center gap-5 flex-wrap mt-5">
        {students ? students.map((item)=>{
          return <MediaCard key={item._id} title={item.fullName} image={item.profileImageUrl} id={item._id} />
        }): <CircularProgress sx={{
          fontSize: "2rem"
        }} />}
      </Box>
    </Box>
  )
}

export default Product