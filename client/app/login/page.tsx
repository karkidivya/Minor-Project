'use client'
// Import necessary components and libraries
import React, { FormEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "./login.module.css";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialCredential = { email: "", password: "" };

const Login: NextPage = () => {
  const [credential, setCredential] = useState(initialCredential);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
        credential
      );
      console.log(data);
      if (!data) {
        setCredential(initialCredential);
      }
    } catch (e) {
      toast.error(e, { hideProgressBar: true });
    }
  };

  useEffect(() => {
    toast.error("Successfully initialized", {
      hideProgressBar: true,
    });
  }, []);

  return (
    <div className={styles.login}>
      <form className={styles.emailAddressFrame} onSubmit={handleForm}>
        <h1 className={styles.kaamsewa}>KaamSewa</h1>
        <div className={styles.emailAddress}>Email Address</div>
        <div className={styles.emailAddress1}>
          <TextField
            placeholder="Email Address"
            type="text"
            name="email"
            value={credential.email}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div className={styles.password}>Password</div>
        <div className={styles.passwordFrame1}>
          <TextField
            placeholder="Password"
            type="password"
            name="password"
            value={credential.password}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <Link href="#" className={styles.forgetPassword}>
          Forgot Password
        </Link>
        <Button type="submit" variant="contained" fullWidth>
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
          <span className={styles.ifYouDo}>{`If you do not have an account `}</span>
          <Link href="/sign-up" className={styles.signUp}>
            Sign Up
          </Link>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
