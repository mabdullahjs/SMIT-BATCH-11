import { Box, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

  //states
  const [student, setStudent] = useState(null)

  // use params
  const { id } = useParams()
  useEffect(() => {
    axios(`https://course-admission-portal.vercel.app/api/v1/student/singlestudent/${id}`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data)
      }).catch((err) => {
        console.log(err);
      })
  } , [])
  return (
    <Box className="d-flex justify-content-center mt-5 container">
      {student ? <Box>
        <Typography variant='h4'>{student.fullName}</Typography>
        <Typography variant='h4'>{student.fatherName}</Typography>
        <Typography variant='h4'>{student.email}</Typography>
      </Box> : <CircularProgress sx={{
          fontSize: "2rem"
        }} />}
    </Box>
  )
}

export default SingleProduct