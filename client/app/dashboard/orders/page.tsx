'use client'
import * as React from 'react';
import { useAppSelector } from "@/lib/hooks";
import { Box, Chip, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Button } from '@mui/material';

const databaseSavedId = 6
const getData = async (accessToken: string, setData: (x: any) => any) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/getBookingByServiceProviderId/${databaseSavedId}`
    console.log(url)
    const res = await axios.get(url, {
            headers: {
                Bearer: accessToken
            }
        })
    
    setData(res?.data?.data)    
}

export default function Orders(){
    const {accessToken} = useAppSelector(state => state.user)
    const [ bookings, setBookings ] = React.useState<any>([])
    useEffect(() => {
        getData(accessToken, setBookings)
    }, [])
        
    return<>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth={false}>
                <Card sx = {{py: 3}}>
                <Box sx={{ mt: 3 }}>
                    <Box>
                        <Typography
                            sx={{ m: 1 }}
                            variant="h4"
                        >
                            Orders
                        </Typography>
                        <Box sx = {{mt: 3}}>
                                {
                                bookings.length > 0 ? 
                                bookings.map((item: any, idx: number) => <OrdersCard booking={item} />
                                ):
                                <Typography textAlign={'center'}>No Booking Yet</Typography>
                                }

                        </Box>

                    </Box>
                </Box>
                </Card>
            </Container>
            </Box>
  </>
}



function OrdersCard({booking}: {booking: any[]}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Button onClick = {handleExpandClick} sx = {{p: 0}}>
        <Card sx={{ maxWidth: 400, p: 0, minWidth: 300 }}>
        <Box m = {2} display={'flex'}>

            <Typography fontWeight={600}>Location: </Typography>
            <Typography> Some Random Location</Typography>
            <Chip color="error" label = "Pending" variant = "filled" />
        </Box>
        
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Box>

                    <Typography fontWeight={600}>Address: </Typography>
                    <Typography> Some Random Location</Typography>
                    
                    <Typography fontWeight={600}>Phone Number: </Typography>
                    <Typography> Some Random Location</Typography>
                    
                    <Typography fontWeight={600}>Work Description: </Typography>
                    <Typography> Some Random Location</Typography>
                    
                    <Typography fontWeight={600}>Registered At: </Typography>
                    <Typography> Some Random Location</Typography>
                    


                    <Button variant = "contained">Completed</Button>
                    <Button></Button>
                </Box>
            

            </CardContent>
        </Collapse>
        </Card>
    </Button>
  );
}