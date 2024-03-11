'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Button onClick = {handleExpandClick} sx = {{p: 0}}>
        <Card sx={{ maxWidth: 345, p: 0 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={<MoreVertIcon />}
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />

        <CardContent>
            Somme Random content to bragg About.
        </CardContent>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
    </Button>
  );
}
/**

additionalNotes
: 
null
amount
: 
null
bookingId
: 
5
bookingStatus
: 'pending' | 'cancelled' | 'completed' | 'in-progress'
null
categoryId
: 
3
createdAt
: 
"2024-03-11T12:51:20.000Z"
customerId
: 
null
date
: 
""
location
: 
{address: 'Lalitpur Metropolitan City, Lalitpur 40000, Nepal', latitude: 27.673502034830065, longitude: 85.30532553792001}
phoneNumber
: 
"+977 967867867867"
reviewId
: 
null
serviceId
: 
null
serviceProviderId
: 
6
time
: 
""
updatedAt
: 
"2024-03-11T12:51:20.000Z"


 */

