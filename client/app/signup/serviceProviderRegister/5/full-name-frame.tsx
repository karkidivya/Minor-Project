'use client'
import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";
import styles from "./full-name-frame.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { workHistory as f_workHistory } from "@/lib/features/signup/signupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const FullNameFrame: NextPage = () => {
  const [ workHistory, setWorkHistory ] = useState({companyName: "", position: "", timeOfWork: "", reference: ""})
  const dispatch: AppDispatch = useAppDispatch()
  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<any>) =>{
    // console.log(e)
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value)

    setWorkHistory((prev) =>{
      return { ...prev, [name]: value}
    })

  }

  const handleSubmit = () =>{
    // handle submit
    dispatch(f_workHistory(workHistory))
    router.push('/signup/serviceProviderRegister/6')
  }
  return (
    <form className={styles.fullNameFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.personalInformation}>Work History</h3>
      <div className={styles.fullName}>Company Name</div>
      <TextField
        className={styles.emailAddressFrame}
        placeholder="Company Name"
        variant="outlined"
        name = "companyName"
        value = {workHistory.companyName}
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
      <div className={styles.fullName}>Position</div>
      <TextField
        className={styles.emailAddressFrame1}
        placeholder="Position"
        variant="outlined"
        name = "position"
        value={workHistory.position}
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
      <div className={styles.fullName}>Time of Work</div>
      <TextField
        className={styles.emailAddressFrame2}
        placeholder="Time of Work"
        variant="outlined"
        name = "timeOfWork"
        value = {workHistory.timeOfWork}
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
      <div className={styles.fullName}>Reference</div>
      <TextField
        className={styles.emailAddressFrame2}
        placeholder="Reference"
        variant="outlined"
        name = "reference"
        value = {workHistory.reference}
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
          width: 200,
          height: 36,
        }}
      >
        Continue
      </Button>

    </form>
  );
};

export default FullNameFrame;
