'use client'
import React, { useEffect } from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Link from "next/link";
import signIn from "../firebase/auth/signin";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const initialCredential = {email: "", password: ""}
const Login: NextPage = () => {

  const router = useRouter();

  const [ credential, setCredential ] = useState(initialCredential)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const email = e.currentTarget.name
    const password = e.currentTarget.value

    setCredential( (prev) =>{
      return { ...prev, [email]: password}
    }) 
  }

  const handleForm = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    // const { result, error } = await signIn(credential.email, credential.password);

    // const accessToken = await result?.user.getIdToken();
   
    // console.log("Access Token:", accessToken);

    // const fetchData = async(accessToken : string | undefined)=>{
    //   const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKENDURL}/login`,{
    //       headers:{
    //           'Authorization': `Bearer ${accessToken}`
    //       }
    //   });
    //   console.log(response.data);
    // }
    // fetchData(accessToken);
    // console.log(result)
    try{
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,credential)
      console.log(data)
      if(!data){
        setCredential(initialCredential);      
      }

    }catch(e){
      toast.error(e, {hideProgressBar: true})
    }
  }
  useEffect(() =>{
    toast.error("Successfully initialized", {
      hideProgressBar: true,
    })
  }, [])
  
  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame} onSubmit={handleForm} >
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <div className={styles.emailAddress}>Email Address</div>
      <div className={styles.passwordFrame}>
        <input
          className={styles.emailAddress1}
          placeholder="Email Address"
          type="text"
          name = "email"
          value = {credential.email}
          onChange = {handleChange}
        />
      </div>
      <div className={styles.password}>Password</div>
      <div className={styles.passwordFrame1}>
        <input
          className={styles.password1}
          placeholder="Password"
          type="password"
          name = "password"
          value = {credential.password}
          onChange = {handleChange}
        />

      </div>
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
        <Link href = '/sign-up' className = {styles.signUp}>Sign Up</Link>
      </div>
      <ToastContainer />
    </form>
    </div>
  );
};

export default Login;


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