'use client'
import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import styles from "./divlayout.module.css";
import { useState } from "react";
import FileUploader from "../../components/FileUploader";
import { useRouter } from "next/navigation";
import { certificationAndQualification } from "@/lib/features/signup/signupSlice";
import { useAppDispatch } from "@/lib/hooks";
 
 interface ICertification{
   certificate : File | undefined | string
   education: 'primary' | 'secondary' | 'higher-secondary' | 'bachelors'| 'masters'
  }
  
  const exampleObject : ICertification = { certificate: undefined , education: 'primary'}
const Divlayout: NextPage = () => {
    
  const [ certification, setCertification] = useState(exampleObject)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const handleChange = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    setCertification((prev) =>{
      return {...prev, [name]: value}
    })
  }
  const handleSubmit = () =>{
    dispatch(certificationAndQualification({...certification, certificate: URL.createObjectURL(certification.certificate as File)}))
    router.push('/signup/serviceProviderRegister/7')
    // handleSubmit
  }
  return (
    <div className={styles.divlayout}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.certificationsAndQualificati}>
        Certifications and Qualifications
      </h3>
      <div className={styles.addCertification}>Add Certification</div>
        <FileUploader image = {certification.certificate} setImage = {(f: string | File | undefined) => setCertification((prev)=> {return {...prev, certificate: f}})}/>
      <div className={styles.educationBackground}>Education Background</div>
      <FormControl
        className={styles.primaryInfoFrame}
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
          name = 'education'
          value = {certification.education}
          onChange = {handleChange}
        >
          <MenuItem value = 'primary'>Primary</MenuItem>
          <MenuItem value = 'secondary'>Secondary</MenuItem>
          <MenuItem value = 'higher-secondary'>Higher Secondary</MenuItem>
          <MenuItem value = 'bachelors'>Bachelors</MenuItem>
          <MenuItem value = 'masters'>Masters</MenuItem>

        </Select>
        <FormHelperText />
      </FormControl>
      <Button
        variant="contained"
        onClick = {handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
};

export default Divlayout;
