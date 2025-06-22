'use client'
import React from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "../login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "@/lib/hooks";
import { setAuthorization, setRole, setUserDetail } from "@/lib/features/user/userSlice";

const initialCredential = {name: "", password: ""}
const UserLogin: NextPage = () => {

  const router = useRouter();
  const dispatch = useAppDispatch()


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
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/userLogin`, {name: credential.name, password: credential.password})
      if(res.status= 201){
        dispatch(setAuthorization(true))
        dispatch(setRole("user"))
        dispatch(setUserDetail({...res.data.payload, id: res.data.payload.userId}))
        
        router.push('/home');
      }
    }catch(e){
      toast.error(String(e), {hideProgressBar: true})
    }
  }

  
  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame} onSubmit={handleForm} >
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <div className={styles.emailAddress}>Full Name</div>
      <FormControl fullWidth sx={{ m: 1}} variant="outlined">
        <OutlinedInput
          name = "name"
          type='text'
          value = {credential.name}
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

      <Link href = "#" className = {styles.forgetPassword}>Forgot Password</Link>
      <Button type = "submit" variant = "contained" fullWidth >
        Log In
      </Button>
      <div className={styles.googleFrame}>
        <div className={styles.loginWith}>{`Login with `}</div>
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
        <span className={styles.ifYouDo}>{`If you do not have account `}</span>
        <Link href = '/signup/userRegister' className = {styles.signUp}>Sign Up</Link>
      </div>
      <ToastContainer />
    </form>
    </div>
  );
};

export default UserLogin;

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