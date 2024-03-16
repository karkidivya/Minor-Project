'use client'
import type { NextPage } from "next";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styles from "./full-name-frame.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/store";
import { personalInformation } from "@/lib/features/signup/signupSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FullNameFrame: NextPage = () => {
  const [signupCredential, setSignupCredential] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch: AppDispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignupCredential((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async () => {
    if (!signupCredential.fullName || !signupCredential.emailAddress || !signupCredential.password) {
      // Check if any field is empty
      alert("Please fill in all fields before proceeding.");
      return; // Prevent submission if any field is empty
    }
    
    if (signupCredential.password.length < 8) {
      // Check if password is at least 8 characters long
      alert("Password must be at least eight characters long.");
      return; // Prevent submission if password is too short
    }

    dispatch(personalInformation(signupCredential));
    router.push('serviceProviderRegister/1');
  };

  return (
    <form className={styles.fullNameFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.personalInformation}>Personal Information</h3>
      <div className={styles.fullName}>Full Name</div>
      <TextField
        className={styles.emailAddressFrame}
        placeholder="Full Name"
        variant="outlined"
        name="fullName"
        value={signupCredential.fullName}
        onChange={handleChange}
      />
      <div className={styles.emailAddress}>Email Address</div>
      <TextField
        className={styles.emailAddressFrame1}
        placeholder="Email Address"
        variant="outlined"
        name="emailAddress"
        value={signupCredential.emailAddress}
        onChange={handleChange}
      />
      <div className={styles.password}>Password</div>
      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={signupCredential.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(prev => !prev)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password"
        />
      </FormControl>
      <Button
        className={styles.nextButton}
        disableElevation={true}
        variant="contained"
        onClick={handleSubmit}
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#4278f0",
          borderRadius: "15px",
          "&:hover": { background: "#4278f0" },
          width: 99,
          height: 25,
        }}
      >
        Next
      </Button>
    </form>
  );
};

export default FullNameFrame;
