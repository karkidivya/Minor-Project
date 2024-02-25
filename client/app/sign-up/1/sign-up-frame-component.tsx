'use client'
import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";
import styles from "./sign-up-frame-component.module.css";
import FileUploader from "../../components/FileUploader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { profileInformation } from "@/lib/features/signup/signupSlice";

interface ICertification{
  profilePicture : File | undefined
  introduction: ""
  location: ""
}
const exampleObject : ICertification = { profilePicture: undefined, introduction: "", location: ""}
const FrameComponent: NextPage = () => {
  const [ profileInfo, setProfileInformation ] = useState(exampleObject)
  const router = useRouter()
  const dispatch: AppDispatch= useAppDispatch();
  const storeState = useAppSelector((state: RootState)=> state.counter)
  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    setProfileInformation((prev) =>{
      return {...prev, [name]: value}
    })
  }
  const handleSubmit = () =>{
    dispatch(profileInformation(profileInfo))
    router.push('2')
  }
  return (
    <div className={styles.kaamsewaParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.profileInfo}>Profile Information</h3>
      <div className={styles.profilePicture}>Profile Picture</div>
      <div className={styles.imageParent}>
        <FileUploader image = {profileInfo.profilePicture} setImage = {(f: File | undefined) => {setProfileInformation((prev) => { return {...prev, profilePicture: f}})}}/>
      </div>
      <div className={styles.biointroduction}>Bio/Introduction</div>
      <textarea
        className={styles.frameChild}
        placeholder="Let’s Us know about you!"
        rows={5}
        cols={16}
      />
      <div className={styles.location}>Location</div>
      <TextField
        className={styles.frameItem}
        placeholder="Location"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            height: "30px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />
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
