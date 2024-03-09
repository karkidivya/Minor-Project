'use client'
import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./availability-frame-set.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { workPreference as f_workPreference } from "@/lib/features/signup/signupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
interface IWorkPreference{
  availability : 'full-time' | 'part-time'
  location: 'kathmandu' | 'pokhara' | 'biratnagar' | 'dharan'
}
const exampleObject : IWorkPreference = { availability: 'full-time' , location: 'kathmandu'}
const AvailabilityFrameSet: NextPage = () => {
  const [ workPreferences, setWorkPreference] = useState(exampleObject)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    setWorkPreference((prev) =>{
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = () =>{
    
    console.log(workPreferences)
    // handleSubmit
    dispatch(f_workPreference(workPreferences))
    router.push('/sign-up/5')
    
  }
  return (
    <div className={styles.availabilityFrameSet}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.workPreferences}>Work Preferences</h3>
      <div className={styles.availability}>Availability</div>
      <FormControl
        className={styles.fullTimeKathmanduSet}
        variant="standard"
        sx={{
          borderColor: "#9fa0a0",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          height: "29px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "29px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "29px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "29px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "29px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 12,
            fontWeight: "Medium",
            fontFamily: "Inter",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "11px",
          },
        }}
      >
        <InputLabel color="secondary" />
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          name = 'availability'
          value = {workPreferences.availability}
          onChange={handleChange}
        >
          <MenuItem value = 'full-time'>Full-Time</MenuItem>
          <MenuItem value = 'part-time'>Part-Time</MenuItem>

        </Select>
        <FormHelperText />
      </FormControl>
      <div className={styles.locationPreference}>Location Preference</div>
      <FormControl
        className={styles.fullTimeKathmanduSet1}
        variant="standard"
        sx={{
          borderColor: "#9fa0a0",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          height: "29px",
          m: 0,
          p: 0,
          "& .MuiInputBase-root": {
            m: 0,
            p: 0,
            minHeight: "29px",
            justifyContent: "center",
            display: "inline-flex",
          },
          "& .MuiInputLabel-root": {
            m: 0,
            p: 0,
            minHeight: "29px",
            display: "inline-flex",
          },
          "& .MuiMenuItem-root": {
            m: 0,
            p: 0,
            height: "29px",
            display: "inline-flex",
          },
          "& .MuiSelect-select": {
            m: 0,
            p: 0,
            height: "29px",
            alignItems: "center",
            display: "inline-flex",
          },
          "& .MuiInput-input": { m: 0, p: 0 },
          "& .MuiInputBase-input": {
            color: "#000",
            fontSize: 12,
            fontWeight: "Medium",
            fontFamily: "Inter",
            textAlign: "left",
            p: "0 !important",
            marginLeft: "11px",
          },
        }}
      >
        <InputLabel color="secondary" />
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          name = 'location'
          value = {workPreferences.location}
          onChange={handleChange}
        >
          <MenuItem value = 'kathmandu'>Kathmandu</MenuItem>
          <MenuItem value = 'pokhara'>Pokhara</MenuItem>
          <MenuItem value = 'dharan'>Dharan</MenuItem>
          <MenuItem value = 'biratnagar'>Biratnagar</MenuItem>

        </Select>
        <FormHelperText />
      </FormControl>
      <Button
        className={styles.availabilityFrameSetChild}
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
          height: 36,
        }}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
};

export default AvailabilityFrameSet;
