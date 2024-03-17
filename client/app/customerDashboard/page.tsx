"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, TextField, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import esewaCall from '../checkout/esewa';
import { useRouter } from 'next/navigation';
import { ContactPageSharp } from '@mui/icons-material';
import { useAppSelector } from '@/lib/hooks';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'SN', width: 80, headerAlign: 'center' },
  { field: 'serviceProviderName', headerName: 'Officer Name', width: 200, headerAlign: 'center' },
  { field: 'categoryName', headerName: 'Selected-Service', width: 200, headerAlign: 'center' },
  { field: 'taskStatus', headerName: 'Task Status', width: 150, headerAlign: 'center' },
  { field: 'extraWorkDescription', headerName: 'Work Description', type: 'number', width: 150, headerAlign: 'center' },
  { field: 'paymentAmount', headerName: 'Payment Amount', type: 'number', width: 150, headerAlign: 'center' },
  { field: 'paymentStatus', headerName: 'Payment Status', width: 150, headerAlign: 'center' },
  {
    field: 'payButton',
    headerName: 'Pay',
    renderCell: (params: GridRenderCellParams) => (
      (
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
  console.log(params.row, "dacsd")
  const amount = params.row.paymentAmount;
  console.log(amount,"dhsabhcash")
  const bookingId = params.row.bookingId;
  const paymentId = params.row.paymentId;
  console.log(paymentId,"dhsabhcash")
  console.log(`Pay ${amount} for Booking ID ${bookingId}`);
  esewaCall(bookingId, paymentId, amount);
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
  const {id} = useAppSelector((state) => state.user.userDetail)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userDashboard/getUserDetails`, { customerId: id });
        console.log(response,"userdetails")
        setRows(response.data.data.map((item: any, index: number) => ({ ...item, id: index + 1 })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const router = useRouter()

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" sx={{ marginLeft: '30px' }} onClick = {() => router.push('/')}>
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