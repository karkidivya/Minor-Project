'use client'
import { useAppSelector } from "@/lib/hooks";
import { Box, Container } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const databaseSavedId = 6
const getData = async (accessToken: string) => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/getBooking/${databaseSavedId}`, {
            headers: {
                Bearer: accessToken
            }
        })
    const bookings = res?.data?.payload
    console.log(bookings)
    // return res

}

export default function Orders(){
    const {accessToken} = useAppSelector(state => state.user)
    useEffect(() => {
        getData(accessToken)
    })
        
    return<>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth={false}>
                <Box sx={{ mt: 3 }}>
                </Box>
            </Container>
            </Box>
  </>
}