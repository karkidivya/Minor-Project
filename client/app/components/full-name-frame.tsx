'use client'
import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";
import styles from "./full-name-frame.module.css";
import { useState } from "react";

const FullNameFrame: NextPage = () => {
  const [ signupCredential, setSignupCredential ] = useState({fullName: "", email: "", passsword: ""})
  const handleChange = (e: React.ChangeEvent<any>) =>{
    // console.log(e)
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value)

    setSignupCredential((prev) =>{
      return { ...prev, [name]: value}
    })

  }

  const handleSubmit = () =>{
    // handle submit
  }
  return (
    <form className={styles.fullNameFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.personalInformation}>Personal Information</h3>
      <div className={styles.fullName}>Full Name</div>
      <TextField
        className={styles.emailAddressFrame}
        placeholder="Full Name"
        variant="outlined"
        name = "fullName"
        value = {signupCredential.fullName}
        onChange={handleChange}
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            // height: "30px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />
      <div className={styles.emailAddress}>Email Address</div>
      <TextField
        className={styles.emailAddressFrame1}
        placeholder="Email Address"
        variant="outlined"
        name = "email"
        value={signupCredential.email}
        onChange = {handleChange}
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            // height: "30px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />
      <div className={styles.password}>Password</div>
      <TextField
        className={styles.emailAddressFrame2}
        placeholder="Password"
        variant="outlined"
        type="password"
        name = "password"
        value = {signupCredential.passsword}
        onChange={handleChange}
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            // height: "30px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />
      <Button
        className={styles.nextButton}
        disableElevation={true}
        variant="contained"
        onClick = {handleSubmit}
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#4278f0",
          borderRadius: "15px",
          "&:hover": { background: "#4278f0" },
          width: 99,
          height: 25,
        }}
      >
        Next
      </Button>
      <div className={styles.signUpLink}>
        <div className={styles.signupWith}>{`SignUp with `}</div>
        <img
          className={styles.devicongoogle}
          loading="eager"
          alt=""
          src="/devicongoogle.svg"
        />
        <img
          className={styles.signUpLinkChild}
          loading="eager"
          alt=""
          src="/group-6.svg"
        />
      </div>
      <div className={styles.ifYouDoContainer}>
        <span className={styles.ifYouDo}>{`If you do not have account `}</span>
        <span className={styles.signUp}>Sign Up</span>
      </div>
    </form>
  );
};

export default FullNameFrame;
