'use client'
import { Box, Button, Card, CardContent, Chip, Collapse, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState} from "react";

function chooseColor(status: string){
  if(status.toLocaleLowerCase() == 'pending')
    return  'error'
  else if(status.toLowerCase() == 'completed')
    return 'success'
  else if(status.toLowerCase() == 'in-progress')
    return 'success'
  else 
    return 'error'
}
const handleApiCall = async (bookingId: string, bookingStatus: string) => {
  const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}`
  const res = await axios.post(`${backendUrl}/booking/updateBookingStatus`,{bookingId, bookingStatus})

}

export default function OrderItem({booking}: {booking: any}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const router = useRouter()

  const handleCompleted = () => {
    handleApiCall(booking.bookingId, 'completed')
    router.push(`/dashboard/orders/billing/${booking.bookingId}`)
    // to handle completed
  }

  const handleInProgress = () => {
    // to handle In - Progress
    handleApiCall(booking.bookingId, 'in-progress')

  }


  return (

    <Card sx={{ maxWidth: 400, p: 0, minWidth: 300 }} onClick = {handleExpandClick}>
      <Box m = {2} display={'flex'}>

        <Typography fontWeight={600}></Typography>
        <Typography> {booking.location.address}</Typography>
        <Chip color={chooseColor(booking.bookingStatus)} label = {booking.bookingStatus} variant = "filled" sx = {{ml: 'auto'}}/>
      </Box>
      
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Stack gap = {2}>

                <Typography fontWeight={600}>Address: </Typography>
                <Typography>{booking.location.address}</Typography>
                <a target = "_blank" href = {`https://www.google.com/maps/dir//${booking.location.latitude},${booking.location.longitude}/@${booking.location.latitude},${booking.location.longitude},17.63z?entry=ttu`}>Google Maps Link</a>
                
                <Typography fontWeight={600}>Phone Number: </Typography>
                <Typography>{booking.phoneNumber}</Typography>
                
                <Typography fontWeight={600}>Work Description: </Typography>
                <Typography>{booking.workDescription}</Typography>
                
                <Typography fontWeight={600}>Registered At: </Typography>
                <Typography>{booking.createdAt}</Typography>
                <Box display = 'flex' justifyContent={"flex-end"} gap={3} sx = {{py: 2}}>
                  {
                    booking.bookingStatus == 'pending'
                    &&
                    <Button variant = "outlined" onClick = {handleInProgress}>
                      On It
                    </Button>
                  }
                  {
                    booking.bookingStatus == 'in-progress'
                    &&
                    <Button variant = "contained" onClick = {handleCompleted}>
                      Completed
                    </Button>
                  }

                </Box>
              </Stack>
          

          </CardContent>
      </Collapse>
    </Card>
  );
}