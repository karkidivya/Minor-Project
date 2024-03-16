'use client'
import { useParams } from "next/navigation"
import BillingForm from "../../components/BillingForm"
import { Box, Container, Typography } from "@mui/material"


export default function Billing(){  
    const params = useParams<{id: string}>()
    
    return (
        <Box component={'main'}
                sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h4">Billing</Typography>
                <Box display = "flex" justifyContent= "center">
                    <BillingForm bookingId={params.id}/>
                </Box>
            
            </Container>
        </Box>
    )

}