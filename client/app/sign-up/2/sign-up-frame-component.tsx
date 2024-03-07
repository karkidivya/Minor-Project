'use client'
import type { NextPage } from "next";
import {
  Button,
} from "@mui/material";
import styles from "./sign-up-frame-component.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { profileInformation } from "@/lib/features/signup/signupSlice";
import { MuiTelInput } from "mui-tel-input";
import GeoLocation from '../../geolocation'
import { coordinate, address } from "@/lib/features/signup/signupSlice";
interface ICertification{
  profilePicture : File | undefined | string
  phoneNumber: string | undefined
  introduction: ""
  location: ""
}
const exampleObject : ICertification = { profilePicture: undefined, phoneNumber: "", introduction: "", location: ""}
const FrameComponent: NextPage = () => {
  const [ profileInfo, setProfileInformation ] = useState(exampleObject)
  const router = useRouter()
  const dispatch: AppDispatch= useAppDispatch();
  const storeState = useAppSelector((state: RootState)=> state.signup)
  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    setProfileInformation((prev) =>{
      return {...prev, [name]: value}
    })
  }
  const handleSubmit = () =>{
    const imageUrl = URL.createObjectURL(profileInfo.profilePicture as File)
    
    dispatch(profileInformation({...profileInfo, profilePicture: imageUrl}))
    router.push('/sign-up/2')
  }
  
  return (
    <div className={styles.kaamsewaParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.profileInfo}>Location and Phone Number</h3>

      <div className={styles.profilePicture}>Phone Number</div>
      <MuiTelInput defaultCountry="NP" 
                    value = {profileInfo.phoneNumber}
                    onChange = {(newPhone) => handleChange({target: {name: 'phoneNumber', value: newPhone}})} 
                    style={{alignSelf: 'flex-start', width: '100%'}}/>
                    
      <div className={styles.location}>Location</div>
      <GeoLocation address={address} coordinate = {coordinate} />

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
        onClick = {handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
};

export default FrameComponent;
