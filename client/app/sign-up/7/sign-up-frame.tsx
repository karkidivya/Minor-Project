'use client'
import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./sign-up-frame.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { personalInformation } from "@/lib/features/signup/signupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const SignUpFrame: NextPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleChange = (e: any) =>{

  }
  const handleSubmit = () =>{
    router.push('8');
    // console.log(profileInformation)
    // handleSubmit
  }
  return (
    <div className={styles.signUpFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.paymentInformation}>Payment Information</h3>
      <div className={styles.selectPaymentMethod}>Select Payment Method</div>
      <div className={styles.frameB}>
        <div className={styles.imageFrameA}>
          <img
            className={styles.image1Icon}
            loading="eager"
            alt=""
            src="/khalti.png"
          />
        </div>
        <div className={styles.paymentImages}>
          <img
            className={styles.image2Icon}
            loading="eager"
            alt=""
            src="/esewa_og.webp"
          />
        </div>
        <img
          className={styles.image3Icon}
          loading="eager"
          alt=""
          src="/connectips.png"
        />
      </div>
      <Button
        className={styles.continueSkipFrame}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#4278f0",
          borderRadius: "15px",
          "&:hover": { background: "#4278f0" },
          width: 126,
          height: 25,
        }}
        onClick = {handleSubmit}
      >
        Continue
      </Button>
      <Button
        className={styles.continueSkipFrame1}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#000",
          borderRadius: "15px",
          "&:hover": { background: "#000" },
          width: 97,
          height: 25,
        }}
        onClick = {handleSubmit}
      >
        Skip
      </Button>
    </div>
  );
};

export default SignUpFrame;
