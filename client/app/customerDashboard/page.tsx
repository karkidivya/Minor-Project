"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, TextField, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import esewaCall from '../checkout/esewa';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'SN', width: 80, headerAlign: 'center' },
  { field: 'serviceProviderId', headerName: 'Service Provider', width: 200, headerAlign: 'center' },
  { field: 'serviceId', headerName: 'Service', width: 200, headerAlign: 'center' },
  { field: 'taskStatus', headerName: 'Task Status', width: 150, headerAlign: 'center' },
  { field: 'totalAmount', headerName: 'Total Amount', type: 'number', width: 150, headerAlign: 'center' },
  { field: 'paymentAmount', headerName: 'Payment Amount', type: 'number', width: 150, headerAlign: 'center' },
  { field: 'paymentStatus', headerName: 'Payment Status', width: 150, headerAlign: 'center' },
  {
    field: 'payButton',
    headerName: 'Pay',
    renderCell: (params: GridRenderCellParams) => (
      params.row.paymentStatus === 'pending' && (
      <Button variant="outlined" onClick={() => handlePayment(params)}>
        Pay Now
      </Button>
    )),
    width: 100,
    headerAlign: 'center',
  },
  {
    field: 'ratingInput',
    headerName: 'Rating',
    renderCell: (params: GridRenderCellParams) => (
      <TextField
        variant="outlined"
        type="number"
        inputProps={{ min: 0, max: 5 }}
        placeholder="Rating"
        value={params.row.rating || ''}
        onChange={(e) => handleRatingChange(e, params)}
      />
    ),
    width: 100,
    headerAlign: 'center',
  },
  {
    field: 'reviewInput',
    headerName: 'Review',
    renderCell: (params: GridRenderCellParams) => (
      <div>
      <TextField
        variant="outlined"
        multiline
        placeholder="Write a review"
        value={params.row.review || ''}
        onChange={(e) => handleReviewChange(e, params)}
      />
      {/* <Button variant="outlined" onClick={() => handleSendReview(params)}>Send</Button> */}
      </div>
    ),
    width: 200,
    headerAlign: 'center',
  },
];

const handleSendReview = async (params: GridRenderCellParams) => {
  const review = params.row.review;
  // const bookingId = params.row.BookingId;
  // try {
  //   await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendReview`, { bookingId, review });
  //   console.log('Review sent successfully');
  //   // Optionally update state or perform other actions after sending the review
  // } catch (error) {
  //   console.error('Error sending review:', error);
  //   // Handle error
  // }
};


const handlePayment = (params: GridRenderCellParams) => {
  console.log(params.row)
  const amount = params.row.totalAmount;
  const bookingId = params.row.bookingId;
  console.log(`Pay ${amount} for Booking ID ${bookingId}`);
  esewaCall(bookingId,amount);
};

const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>, params: GridRenderCellParams) => {
  const value = e.target.value;
  console.log(`Rating changed to ${value} for row ID ${params.row.id}`);
  // Update state or perform other actions based on the rating change
};

const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>, params: GridRenderCellParams) => {
  const value = e.target.value;
  console.log(`Review changed to ${value} for row ID ${params.row.id}`);
  // Update state or perform other actions based on the review change
};

export default function CustomerDashboard() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userDashboard/getUserDetails`, { customerId: 1 });
        setRows(response.data.data.map((item, index) => ({ ...item, id: index + 1 })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" sx={{ marginLeft: '30px' }}>
          <ArrowBackIosIcon />
        </Button>
        <Typography variant="h3" sx={{ margin: '30px', marginLeft: '250px' }}>
          Customer Dashboard
        </Typography>
      </div>
      <div style={{ height: 'calc(100vh - 150px)', width: '80%', margin: 'auto', textAlign: 'center', backgroundColor: 'white' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableColumnFilter
          disableColumnMenu
          autoHeight
        />
      </div>
    </div>
  );
}
