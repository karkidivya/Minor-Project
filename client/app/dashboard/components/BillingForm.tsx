'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, Button, Divider, Stack, TextField } from '@mui/material';

const exampleObject = {
    transaction_uuid: "",
    remarks: "",
    total_amount: "",
    name: "",
}
export default function BillingForm({bookingId}: {bookingId: string}) {
  const [billingInfo, setBillingInfo] = React.useState(exampleObject);
    React.useEffect( () => {
        setBillingInfo({...billingInfo, transaction_uuid: bookingId})
    },[])
  const handleChange = (e: any) =>{
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value
    })

  }
    
  return (
    <Card sx = {{maxWidth: 350, p: 4}}>
      <Stack gap = {2}>
        <Stack gap = {4}>
          <Typography variant = 'h5'>Billing</Typography>
            <TextField 
                    name = "name"
                    value = {billingInfo.name}
                    label = "Customer's Name"
                    onChange = {handleChange}
            />

            <TextField 
                    label = "Enter the Amount"
                    name = "total_amount"
                    value = {billingInfo.total_amount}
                    onChange = {handleChange}
                    />
            <TextField 
                label = "Remarks"
                name = "remarks"
                value = {billingInfo.remarks}
                onChange = {handleChange}
                />


        </Stack>
        <Divider></Divider>

        <Box display= 'flex' alignItems={'center'}>
          <Typography variant = "h6">Total</Typography>
          <Typography sx = {{ml: 'auto'}}>{`Rs. ${billingInfo.total_amount}`}</Typography>
        </Box>
        
      </Stack>

    </Card>
  );
}
