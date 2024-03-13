'use client'
import type { NextPage } from "next";
import {
  Button,
} from "@mui/material";
import styles from "./sign-up-frame-component.module.css";
import FileUploader from "../../../components/FileUploader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { profileInformation } from "@/lib/features/signup/signupSlice";

interface ICertification{
  profilePicture : File | undefined | string
  introduction: ""
}
const exampleObject : ICertification = { profilePicture: undefined, introduction: "" }

const FrameComponent: NextPage = () => {
  const [ profileInfo, setProfileInformation ] = useState(exampleObject)
  const router = useRouter()
  const dispatch: AppDispatch= useAppDispatch();

  const handleSubmit = () =>{
    const imageUrl = URL.createObjectURL(profileInfo.profilePicture as File)
    
    dispatch(profileInformation({...profileInfo, profilePicture: imageUrl}))
    router.push('/signup/serviceProviderRegister/2')
  }
  
  return (
    <div className={styles.kaamsewaParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.profileInfo}>Profile Information</h3>
      <div className={styles.profilePicture}>Profile Picture</div>
      {/* <div className={styles.imageParent}> */}
        <FileUploader image = {profileInfo.profilePicture} setImage = {(f: string | File | undefined) => {setProfileInformation((prev) => ({...prev, profilePicture: f}))}}/>
      {/* </div> */}

                    
      <div className={styles.biointroduction}>Bio/Introduction</div>
      <textarea
        className={styles.frameChild}
        placeholder="Let Us know about you!"
        value = {profileInfo.introduction}
        onChange = {(e: any)=> setProfileInformation((prev) => ({...prev, introduction: e.target.value}))}
      />
      <Button
        variant="contained"
        onClick = {handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
};

export default FrameComponent;
