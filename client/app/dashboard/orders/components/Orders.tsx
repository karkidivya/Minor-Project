'use client'
import { Box, Card, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OrderItem from './OrderItem'
import axios from "axios";


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

export default function Orders() {
    const [bookings, setbookings] = useState<any[]>([])

    useEffect(() => {
        getData('', setbookings)
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
                        bookings.map((item: any, idx: number) => <OrderItem key = {idx} booking={item} />
                        ):
                        <Typography textAlign={'center'}>No Booking Yet</Typography>
                        }

                </Box>

            </Box>
        </Box>
    </Container>
    )
}