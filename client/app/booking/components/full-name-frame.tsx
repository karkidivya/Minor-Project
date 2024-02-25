'use client'
import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";
import styles from "./full-name-frame.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MuiTelInput } from "mui-tel-input";
import { useAppDispatch } from "@/lib/hooks";
import { informationAndWorkDescription, bookingStep } from "@/lib/features/booking/bookingSlice";

const FullNameFrame: NextPage = () => {
  const [ info, setInfo ] = useState({location: "", phoneNumber: "", workDescription: ""})
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
  
    setInfo((prev) =>{
      return { ...prev, [name]: value}
    })

  }

  const handleSubmit = () =>{
    dispatch(informationAndWorkDescription(info))
    dispatch(bookingStep(1))
    router.push('/booking/1')
    // handle submit
  }
  return (
    <form className={styles.fullNameFrame}>
      <h1 className={styles.kaamsewa}>Your Information</h1>
      <div className={styles.fullName}>Your Location</div>
      <TextField
        className={styles.emailAddressFrame}
        placeholder="Type in your location"
        variant="outlined"
        name = "location"
        value = {info.location}
        onChange={handleChange}
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />

      <div className={styles.password}>Your Phone Number</div>
      <MuiTelInput defaultCountry="NP" 
                    value = {info.phoneNumber}
                    onChange = {(newPhone) => handleChange({target: {name: 'phoneNumber', value: newPhone}})} 
                    style={{alignSelf: 'flex-start', width: '100%'}}/>
      
      <h1 className={styles.kaamsewa}>Work Description</h1>
      <div className={styles.password}>Describe the Work</div>
      <TextField
        className={styles.emailAddressFrame2}
        placeholder="Give a little about the description of your work."
        variant="outlined"
        name = "workDescription"
        value = {info.workDescription}
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
          marginTop: '30px',
          alignSelf: 'flex-start',
          textTransform: "none",
          color: "#fff",
          // fontSize: "12",
          background: "#4278f0",
          borderRadius: "15px",
          "&:hover": { background: "#4278f0" },
          width: 150,
          height: 36,
        }}
      >
        Next
      </Button>

    </form>
  );
};

export default FullNameFrame;
