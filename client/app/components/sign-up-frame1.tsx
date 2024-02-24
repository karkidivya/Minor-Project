'use client'
import type { NextPage } from "next";
import { Button,  FormControlLabel, Checkbox } from "@mui/material";
import styles from "./sign-up-frame1.module.css";
import { useState } from "react";

const SignUpFrame1: NextPage = () => {
  const [ isChecked, setIsChecked ] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked as boolean)
  }

  const handleSubmit = () =>{
    //do something
  }
  return (
    <div className={styles.signUpFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.termsAndConditions}>Terms and Conditions</h3>
      <div className={styles.acceptanceOfTermsContainer}>
        <span>
          <p className={styles.acceptanceOfTerms}>1. Acceptance of Terms</p>
          <p className={styles.byAccessingOr}>
            By accessing or using KaamSewa ("WorkForce Marketplace"), you agree
            to comply with and be bound by these terms and conditions. If you do
            not agree to these terms, please do not use the Platform.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.userAccounts}>2. User Accounts</p>
          <ul className={styles.usersMustProvideAccurateAn}>
            <li className={styles.usersMustProvideAccurateAn1}>
              <span className={styles.usersMustProvide}>
                Users must provide accurate and complete information during the
                registration process.
              </span>
            </li>
            <li className={styles.usersAreResponsibleForMain}>
              <span className={styles.usersAreResponsible}>
                Users are responsible for maintaining the confidentiality of
                their account credentials.
              </span>
            </li>
            <li className={styles.usersAreProhibitedFromShar}>
              <span className={styles.usersAreProhibited}>
                Users are prohibited from sharing their accounts with others.
              </span>
            </li>
          </ul>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.serviceProviderResponsibilit}>
            3. Service Provider Responsibilities
          </p>
          <ul className={styles.serviceProvidersMustAccurat}>
            <li className={styles.serviceProvidersMustAccurat1}>
              <span className={styles.serviceProvidersMust}>
                Service providers must accurately represent their skills,
                qualifications, and experience.
              </span>
            </li>
            <li className={styles.serviceProvidersAreResponsi}>
              <span className={styles.serviceProvidersAre}>
                Service providers are responsible for setting and managing their
                service rates.
              </span>
            </li>
            <li>
              <span className={styles.serviceProvidersMust1}>
                Service providers must maintain a professional and respectful
                demeanor towards clients and other users.
              </span>
            </li>
          </ul>
        </span>
      </div>
      {/* <div className={styles.readMoreText}>
        <div className={styles.readMore}>Read More</div>
      </div> */}
      <div className={styles.mDICheckFrame}>
        {/* <div className={styles.vectorIcon}>
          <div className={styles.mdicheckBold}>
            <img
              className={styles.childVectorIcon}
              loading="eager"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div> */}
        {/* <FormGroup> */}
        <FormControlLabel required control = {<Checkbox checked = {isChecked} onChange = {handleChange}/>} label = "I agree to the terms and conditions" />
        {/* </FormGroup> */}
        {/* <div className={styles.iAgreeToContainer}>
          <span>{`I agree to the `}</span>
          <span className={styles.termsAndConditions1}>
            terms and conditions
          </span>
        </div> */}
      </div>
      <Button
        className={styles.submitButton}
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
          width: 113,
          height: 25,
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default SignUpFrame1;
