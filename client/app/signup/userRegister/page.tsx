'use client'
import React from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "./registerUser.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Link from "next/link";
import signIn from "../../firebase/auth/signin";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialCredential = {name: "",phoneNo:"", password: ""}
const userLogin: NextPage = () => {

  const router = useRouter();

  const [ credential, setCredential ] = useState(initialCredential)
  const [ showPassword, setShowPassword ] =  useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = e.currentTarget;
    setCredential((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleForm = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    try{
      console.log(credential)
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/registerUser`, {name: credential.name,phoneNumber: credential.phoneNo, password: credential.password})
      console.log(res.data)
      if(res.status= 201){
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/loginOtp/send-otp`, {phoneNumber: credential.phoneNo}).then((res) =>{
          // router.push(`/registerUser/OTP?phoneNumber=${credential.phoneNo}`);
          router.push('/signup/userRegister/OTP')

        })
        
        router.push('/signup/userRegister/OTP')
      }

    }catch(e){
      // toast.error(e, {hideProgressBar: true})
      // router.push('/')
    }
  }

  
  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame} onSubmit={handleForm} >
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <div className={styles.emailAddress}>Full name</div>
      <FormControl fullWidth sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          name = "name"
          type='text'
          value = {credential.name}
          onChange = {handleChange}
          placeholder="Enter your Full Name"
        />
      </FormControl>
      <div className={styles.emailAddress}>Phone number</div>
      <FormControl fullWidth sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          name = "phoneNo"
          type='text'
          value = {credential.phoneNo}
          onChange = {handleChange}
          placeholder="Enter your Phone Number"
        />
      </FormControl>
      <div className={styles.password}>Password</div>
      <FormControl fullWidth sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          name = "password"
          type={showPassword ? 'text' : 'password'}
          value = {credential.password}
          onChange = {handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(prev => !prev)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password"
        />
      </FormControl>

      <Button type = "submit" variant = "contained" fullWidth  >
        Register
      </Button>
      <div className={styles.googleFrame}>
        <div className={styles.loginWith}>{`Register with `}</div>
        <img
          className={styles.devicongoogle}
          loading="eager"
          alt=""
          src="/devicongoogle.svg"
        />
        <img
          className={styles.googleFrameChild}
          loading="eager"
          alt=""
          src="/group-6.svg"
        />
      </div>
      <div className={styles.ifYouDoContainer}>
        <span className={styles.ifYouDo}>{`If you already have account `}</span>
        <Link href = '/login' className = {styles.signUp}>Login</Link>
      </div>
      <ToastContainer />
    </form>
    </div>
  );
};

export default userLogin;


/**
  {
    fullName: String,
    email: String,
    password: String,
    profilePicture: Single Image,
    introduction: String,
    location: String,
    skill: String,
    proficiency: String,
    availability: String,
    preference: String,
    company: String,
    position: String,
    timeOfWork: String,
    reference: String,
    certificate: Single Image,
    education: String,
    payment: String,
  }
 */