import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MediaCard({image , title , id}) {

    // navigate hook
    const navigate = useNavigate()
    const singleStudent = ()=>{
        navigate(`/singleproduct/${id}`)
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 , width:"20rem" }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={singleStudent} variant='outlined'>Show More..</Button>
      </CardActions>
    </Card>
  );
}
