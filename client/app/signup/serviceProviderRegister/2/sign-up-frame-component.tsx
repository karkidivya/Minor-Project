'use client'
import type { NextPage } from "next";
import {
  Button,
} from "@mui/material";
import styles from "./sign-up-frame-component.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch} from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { phoneNumber as f_phoneNumber } from "@/lib/features/signup/signupSlice";
import { MuiTelInput } from "mui-tel-input";
import GeoLocation from '../../../geolocation'
import { coordinate, address, phoneNumber as f_phoneNumber } from "@/lib/features/signup/signupSlice";


const FrameComponent: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { location } = useAppSelector((state) => state.signup);
  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = () => {
    if (!phoneNumber || phoneNumber.length !== 16 || !location.address) {
      // Check if phone number is empty or not 10 characters long
      alert("Please enter a 10-digit phone number and fill in all fields before proceeding.");
      return;
    }

    dispatch(f_phoneNumber(phoneNumber));
    router.push('/signup/serviceProviderRegister/3');
  };

  return (
    <div className={styles.kaamsewaParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.profileInfo}>Location and Phone Number</h3>

      <div className={styles.profilePicture}>Phone Number</div>
      <MuiTelInput
        defaultCountry="NP"
        value={phoneNumber}
        onChange={(newPhone) => setPhoneNumber(newPhone)}
        style={{ alignSelf: 'flex-start', width: '100%' }}
      />

      <div className={styles.location}>Location</div>
      <GeoLocation address={address} coordinate={coordinate} location={location} />

      <Button
        className={styles.frameInner}
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
          height: 30,
        }}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
};

export default FrameComponent;