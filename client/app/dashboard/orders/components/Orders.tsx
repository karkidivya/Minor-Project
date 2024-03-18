'use client'
import { Box, Card, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OrderItem from './OrderItem'
import axios from "axios";
import { useAppSelector } from "@/lib/hooks";

const getData = async (url: string, accessToken: string, setData: (x: any) => any) => {
    console.log(url)
    try{
        const res = await axios.get(url, {
                headers: {
                    Bearer: accessToken
                }
            })
        
        setData(res?.data?.data)    

    }catch(e){
        console.log(e)
    }
}

export default function Orders() {
    const [bookings, setBookings] = useState<any[]>([])
    const { serviceProviderId } = useAppSelector((state) => state.user.userDetail)
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/getBookingByServiceProviderId/${serviceProviderId}`
    useEffect(() => {
        getData(url, '', setBookings)
    }, [])

    return (
    <Container maxWidth="lg">
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
                        bookings.map((item: any, idx: number) => <OrderItem key = {idx} booking={item} setBookings = {setBookings}/>
                        ):
                        <Typography textAlign={'center'}>No Booking Yet</Typography>
                        }

                </Box>

            </Box>
        </Box>
    </Container>
    )
}