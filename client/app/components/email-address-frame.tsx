'use client'
import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./email-address-frame.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const EmailAddressFrame: NextPage = () => {
  const router = useRouter();

  const [ credential, setCredential ] = useState({email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const name = e.currentTarget.name
    const value = e.currentTarget.value

    setCredential( (prev) =>{
      return { ...prev, [name]: value}
    })
  }
  const handleLogIn = () => {
    console.log(credential)
  }

  return (
    <form className={styles.emailAddressFrame}>
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
      <Button variant = "contained" fullWidth onClick = {handleLogIn}>
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
  );
};

export default EmailAddressFrame;
