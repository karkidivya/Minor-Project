'use client'
import React from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Link from "next/link";
import signIn from "../firebase/auth/signin";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialCredential = {name: "",phoneNo:"", password: ""}
const userLogin: NextPage = () => {

  const router = useRouter();

  

  
  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3>Choose your login</h3>
      <Box display = 'flex' gap = {2}>
        <Button variant = "contained" sx = {{p: 2, px: 3, minWidth: 200}} onClick = {() => router.push('/login/userLogin')}>User Login</Button>
        <Button variant="contained" sx = {{p: 2, px: 3, minWidth: 200}} onClick = {() => router.push('/login/serviceProvider')}>Service Provider Login</Button>

      </Box>
    </form>
    </div>
  );
};

export default userLogin;