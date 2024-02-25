'use client'
import type { NextPage } from "next";
import {
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import styles from "./frame-parent.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { skillAndExpertise } from "@/lib/features/signup/signupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
interface ISkillAndProficiency{
  skill : 'carpenter' | 'plumber' | 'electrician' | 'mechanic' | 'cleaner' | 'painter'
  proficiency: 'beginner' | 'intermediate' | 'semi-pro' | 'pro'
}
const exampleObject : ISkillAndProficiency = { skill: 'carpenter' , proficiency: 'beginner'}
const FrameParent: NextPage = () => {
  const [ skillAndProficiency, setSkillAndProficiency] = useState(exampleObject)
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch();

  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    setSkillAndProficiency((prev) =>{
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = () =>{
    // console.log(skillAndProficiency)
    // handleSubmit
    dispatch(skillAndExpertise(skillAndProficiency))
    router.push('/sign-up/3')
  }
  return (
    <div className={styles.frameParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.skillAndExpertise}>Skill and Expertise</h3>

      <div className={styles.experienceLevel}>Skill</div>
      <FormControl
        className={styles.parent}
        variant="standard"
        sx={{
          borderColor: "#9fa0a0",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          // backgroundColor: "#fff",
          borderRadius: "5px",
          width: "311px",
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
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          name = "skill"
          onChange = {handleChange}
          value = {skillAndProficiency.skill}
        >
          <MenuItem value = {'carpenter'}>Carpenter</MenuItem>
          <MenuItem value = {'plumber'}>Plumber</MenuItem>
          <MenuItem value = {'electrician'}>Electrician</MenuItem>
          <MenuItem value = {'mechanic'}>Mechanic</MenuItem>
        </Select>

        <FormHelperText />
      </FormControl>
      <div className={styles.experienceLevel}>Experience Level</div>
      <FormControl
        className={styles.parent}
        variant="standard"
        sx={{
          borderColor: "#9fa0a0",
          borderStyle: "SOLID",
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          // backgroundColor: "#fff",
          borderRadius: "5px",
          width: "311px",
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
        {/* <InputLabel color="secondary" /> */}
        <Select
          color="secondary"
          disableUnderline
          displayEmpty
          name = "proficiency"
          onChange = {handleChange}
          value = {skillAndProficiency.proficiency}
        >
          <MenuItem value = {'beginner'}>Beginner</MenuItem>
          <MenuItem value = {'intermediate'}>Intermediate</MenuItem>
          <MenuItem value = {'semi-pro'}>Semi-Pro</MenuItem>
          <MenuItem value = {'pro'}>Pro</MenuItem>
        </Select>

        <FormHelperText />
      </FormControl>
      <Button
        className={styles.continueLabel}
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
    </div>
  );
};

export default FrameParent;