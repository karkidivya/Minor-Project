"use client";
// login.page.tsx
import React, { useEffect } from "react";
import styles from "./customerDashboard.module.css";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
``;
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
import esewaCall from '../checkout/esewa'

const columns: GridColDef[] = [
  { field: "id", headerName: "SN", width: 80, headerAlign: "center" },
  { field: "BookingId", headerName: "BookingId", width: 80, headerAlign: "center" },
  {
    field: "serviceProviderName",
    headerName: "Service Provider",
    width: 370,
    headerAlign: "center",
  },
  {
    field: "serviceName",
    headerName: "Service",
    width: 300,
    headerAlign: "center",
  },
  {
    field: "Task",
    headerName: "Task Status",
    width: 100,
    headerAlign: "center",
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "number",
    width: 200,
    headerAlign: "center",
  },
  {
    field: "Payment",
    headerName: "Payment",
    renderCell: (params) => (
      <Button variant="outlined" onClick={() => handlePayment(params)}>
        Pay Now
      </Button>
    ),
    width: 100,
    headerAlign: "center",
  },
  {
    field: "Review",
    headerName: "Review",
    //  renderCell: (params: GridValueGetterParams) => (
    //    <Button variant="outlined" onClick={() => handleReview(params.row.id)}>
    //      Write Review
    //    </Button>
    //  ),
    width: 200,
    headerAlign: "center",
  },
  {
    field: "Rating",
    headerName: "Rating",
    //  renderCell: (params: GridValueGetterParams) => (
    //    <Button variant="outlined" onClick={() => handleRating(params.row.id)}>
    //      Rate
    //    </Button>
    //  ),
    width: 200,
    headerAlign: "center",
  },
];
// ...

const handlePayment = (params :any) => {
  const amount = params.row.Amount;
  const bookingId = params.row.BookingId;
  console.log(bookingId);
  // Call the esewaCall function with the selected bookingId
  esewaCall(bookingId,amount);
};

// ...

const handleReview = (id: string) => {
  // Implement your review logic
  console.log(`Review for row with id ${id}`);
};
const handleRating = (id: string) => {
  // Implement your rating logic
  console.log(`Rating for row with id ${id}`);
};
export default function CustomerDashboard() {
  const [rows, setRows] = useState([
    {
      id: 1,
      BookingId:123,
      serviceProviderName: 'Service Provider 1',
      serviceName: 'Service 1',
      Task: 'Completed',
      Amount: 100,
      Payment: { isLoading: false },
      Review: 'Good service!',
      Rating: 4,
    },
    {
      id: 2,
      BookingId:123,
      serviceProviderName: 'Service Provider 2',
      serviceName: 'Service 2',
      Task: 'Pending',
      Amount: 150,
      Payment: { isLoading: true },
      Review: 'Average experience',
      Rating: 3,
    },
    {
      id: 3,
      BookingId:123,
      serviceProviderName: 'Service Provider 3',
      serviceName: 'Service 3',
      Task: 'Completed',
      Amount: 120,
      Payment: { isLoading: false },
      Review: 'Excellent job!',
      Rating: 5,
    },
    {
      id: 4,
      BookingId:123,
      serviceProviderName: 'Service Provider 4',
      serviceName: 'Service 4',
      Task: 'Pending',
      Amount: 130,
      Payment: { isLoading: false },
      Review: 'Could be better',
      Rating: 2,
    },
    {
      id: 5,
      BookingId:123,
      serviceProviderName: 'Service Provider 5',
      serviceName: 'Service 5',
      Task: 'Completed',
      Amount: 200,
      Payment: { isLoading: true },
      Review: 'Satisfactory',
      Rating: 4,
    },
  ]);
  return (
    <div className={styles.background}>
      <div
        style={{
          height: 1000,
          width: "80%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button variant="contained" sx={{ marginLeft: "30px" }}>
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="h3" sx={{ margin: "30px", marginLeft: "250px" }}>
            Customer Dashboard
          </Typography>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          //  pageSize={5}
          disableColumnFilter
          disableColumnMenu
          autoHeight
          style={{ width: "100%", height: "78%" }}
        />
      </div>
    </div>
  );
}