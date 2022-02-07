import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./ItemComponent.css";


export default function ItemComponent({data}) {
  return (
    <div className = "card"> 
    <Card  className = "card" sx={{ minHeight:250, border: 1, padding:5 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}



 