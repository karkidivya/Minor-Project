'use client'
import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./sign-up-frame.module.css";
import { useRouter } from "next/navigation";
import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { paymentInformation } from "@/lib/features/signup/signupSlice";
import Select from '../../components/Select'
const exampleOption = [
  {
    label : <img
            className={styles.image1Icon}
            loading="eager"
            alt=""
            src="/khalti.png"
          />,
    value: 'khalti'
  },
  {
    label : <img
          className={styles.image3Icon}
          loading="eager"
          alt=""
          src="/connectips.png"
        />,
    value: 'connect-ips',
    
  },
  {
    label : <img
            className={styles.image2Icon}
            loading="eager"
            alt=""
            src="/esewa_og.webp"
          />,
    value : 'esewa'
  }
]

const SignUpFrame: NextPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [ paymentMethod, setPaymentMethod ] = React.useState("");
  const handleSubmit = () =>{
    dispatch(paymentInformation(paymentMethod))
    router.push('8');
  }
  return (
    <div className={styles.signUpFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.paymentInformation}>Payment Information</h3>
      <div className={styles.selectPaymentMethod}>Select Payment Method</div>
      
      <Select value = {paymentMethod} option = {exampleOption} setValue = {(x: string) => {setPaymentMethod(x)}} flexDirection="row"/>
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
