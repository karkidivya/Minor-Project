// 'use client'
// // login.page.tsx
// import React, { useEffect } from 'react';
// import styles from './customerDashboard.module.css';
// import { useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';``
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import { Button, Typography } from '@mui/material';




// const columns: GridColDef[] = [
//    { field: 'id', headerName: 'SN', width: 80, headerAlign: 'center' },
//    { field: 'BookingId', headerName: 'BookingId', width: 80, headerAlign: 'center' },
//    { field: 'serviceProviderName', headerName: 'Service Provider', width: 370, headerAlign: 'center' },
//    { field: 'serviceName', headerName: 'Service', width: 300, headerAlign: 'center' },
//    { field: 'Task', headerName: 'Task Status', width: 100, headerAlign: 'center' },
//    {
//      field: 'Amount',
//      headerName: 'Amount',
//      type: 'number',
//      width: 200,
//      headerAlign: 'center',
//    },
//    {
//      field: 'Payment',
//      headerName: 'Payment',
//     //  renderCell: (params: GridValueGetterParams) => (
//     //    <Button variant="outlined" onClick={() => handlePayment(params)}>
//     //      Pay Now
//     //    </Button>
//     //  ),
//      width: 100,
//      headerAlign: 'center',
//    },
//    {
//      field: 'Review',
//      headerName: 'Review',
//      renderCell: (params: GridValueGetterParams) => (
//        <Button variant="outlined" onClick={() => handleReview(params.row.id)}>
//          Write Review
//        </Button>
//      ),
//      width: 200,
//      headerAlign: 'center',
//    },
//    {
//      field: 'Rating',
//      headerName: 'Rating',
//      renderCell: (params: GridValueGetterParams) => (
//        <Button variant="outlined" onClick={() => handleRating(params.row.id)}>
//          Rate
//        </Button>
//      ),
//      width: 200,
//      headerAlign: 'center',
//    },
//  ];
//  const handlePayment = (params) => {
//   const amount = params.row.Amount;
//   const bookingId = params.row.BookingId;
//   console.log(bookingId)
//   console.log("Hello")
//   // console.log(amount);
//   // Call the esewaCall function with the selected bookingId
//   esewaCall(bookingId,amount);
// };
//   const handleReview = (id: string) => {
//    // Implement your review logic
//    console.log(`Review for row with id ${id}`);
//  };
//   const handleRating = (id: string) => {
//    // Implement your rating logic
//    console.log(`Rating for row with id ${id}`);
//  };
//  export default function CustomerDashboard() {
//    const [rows,setRows] = useState([])
//  return (
//    <div className={styles.background}>
      
//    <div style={{ height: 1000, width: '80%', margin: 'auto', textAlign: 'center',backgroundColor: 'white' }}>
//    <div style={{ display: 'flex', alignItems: 'center' }}>
//      <Button variant="contained" sx={{marginLeft:'30px'}}><ArrowBackIosIcon /></Button>
//      <Typography variant="h3" sx={{ margin: '30px',marginLeft:'250px' }}>
//        Customer Dashboard
//      </Typography>
//    </div>
//  <DataGrid
//  rows={rows}
//  columns={columns}
//  pageSize={5}
//  disableColumnFilter
//  disableColumnMenu
//  autoHeight
//  style={{ width: '100%',height:'87%' }}
// />


// </div>


// </div>
//  );
// }
