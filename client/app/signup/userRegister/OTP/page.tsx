'use client'
import React from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "../registerUser.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@mui/material";
import { MuiOtpInput } from 'mui-one-time-password-input'
import axios from "axios";
const userLogin: NextPage = () => {

    const router = useRouter();
    const [otp, setOtp] = useState('')
    const searchParams = useSearchParams()
    const phoneNumber = searchParams.get('phoneNumber')
  const handleForm = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()


    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/loginOtp/verify-otp`, {phoneNumber, otp})
    .then(res => {
        router.push('/home')
    })
    .catch(err => {
        console.log("Error from OTP/page.tsx", err)
        // router.push('/')
    })

  }

  
  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame} onSubmit={handleForm} >
        <h1 className={styles.kaamsewa}>KaamSewa</h1>
        <h3>Enter you Otp</h3>
        <MuiOtpInput value = {otp} onChange= {setOtp} length = {6}/>
    
        <Button type = "submit" variant = "contained" fullWidth >
            Verify
        </Button>

    </form>
    </div>
  );
};

export default userLogin;
