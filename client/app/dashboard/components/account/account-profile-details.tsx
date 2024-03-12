'use client'
import { ReactPropTypes, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { useAppSelector } from '@/lib/hooks';

export const AccountProfileDetails = (props: ReactPropTypes) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    emailAddress: 'demo@devias.io',
    phoneNumber: '',
    address: 'Alabama',
  });

  const { fullName, emailAddress, phoneNumber, location} = useAppSelector(state => state.user.userDetail)

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = () => {
    // handle submit here

  }


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify your Full Name"
                label="Full name"
                name="firstName"
                onChange={handleChange}
                required
                value={fullName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <MuiTelInput value = {values.phoneNumber} defaultCountry='NP' value ={phoneNumber}/>
            </Grid>
            <Grid
              item
              // md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="emailAddress"
                onChange={handleChange}
                required
                value={emailAddress}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Your Location"
                name="address"
                onChange={handleChange}
                required
                value={location?.address}
                variant="outlined"
              >

              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick = {handleSubmit}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
