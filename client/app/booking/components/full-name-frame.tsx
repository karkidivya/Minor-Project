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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { informationAndWorkDescription, bookingStep, address, coordinate} from "@/lib/features/booking/bookingSlice";
import GeoLocation from '../../geolocation';


const FullNameFrame: NextPage = () => {
  const [ info, setInfo ] = useState({phoneNumber: "", workDescription: ""})
  const dispatch = useAppDispatch()
  const router = useRouter()
  const {location} = useAppSelector(state => state.booking)

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

      <div className={styles.password}>Your Phone Number</div>
      <MuiTelInput defaultCountry="NP" 
                    value = {info.phoneNumber}
                    onChange = {(newPhone) => handleChange({target: {name: 'phoneNumber', value: newPhone}})} 
                    style={{alignSelf: 'flex-start', width: '100%'}}/>
      
      <div className={styles.fullName}>Your Location</div>
      <GeoLocation address = {address} coordinate = {coordinate} latitude={location.latitude} longitude ={location.longitude}/>

      
      <h1 className={styles.kaamsewa}>Work Description</h1>
      <div className={styles.password}>Describe the Work</div>
      <TextField
        className={styles.emailAddressFrame2}
        placeholder="Give a little about the description of your work."
        variant="outlined"
        name = "workDescription"
        value = {info.workDescription}
        onChange={handleChange}
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
