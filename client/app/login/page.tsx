'use client'
import React from "react";
import { FormEvent } from 'react';
import type { NextPage } from "next";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Link from "next/link";
import signIn from "../firebase/auth/signin";
const Login: NextPage = () => {

  const router = useRouter();

  const [ credential, setCredential ] = useState({email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const email = e.currentTarget.name
    const password = e.currentTarget.value

    setCredential( (prev) =>{
      return { ...prev, [email]: password}
    }) 
  }

  const handleForm = async (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    const { result, error } = await signIn(credential.email, credential.password);

    if (error) {
        return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push("/admin")
}
  
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
        <Link href = '/signup' className = {styles.signUp}>Sign Up</Link>
      </div>
    </form>
    </div>
  );
};

export default Login;