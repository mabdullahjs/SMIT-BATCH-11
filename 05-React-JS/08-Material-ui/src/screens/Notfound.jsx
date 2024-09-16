import { Box, Typography } from '@mui/material'
import React from 'react'

const Notfound = () => {
    return (
        <Box sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant='h2'>Not Found!</Typography>

        </Box>
    )
}

export default Notfound