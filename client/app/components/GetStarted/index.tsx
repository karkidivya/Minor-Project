'use client'
import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./get-started.module.css";

const GetStarted: NextPage = () => {
  return (
    <div className={styles.getStarted}>
      <h2 className={styles.readyToGet}>Ready To Get Started?</h2>
      <div className={styles.homeRepairBoxIcon}>
        <FrameComponent1
          rectangle9="/rectangle-9-1@2x.png"
          hearThatTheSweetSignOfRel="Hear that? The sweet sign of relief. Start getting more done."
          signUp="Sign Up"
          goTo = 'signup/userRegister'
        />
        <div className={styles.footerAboutUsHeader} />
        <FrameComponent1
          rectangle9="/rectangle-10-1@2x.png"
          hearThatTheSweetSignOfRel="Grow your own business while saving the day for buzy neighbors."
          signUp="Become a Pro"
          propHeight="340px"
          propWidth="169px"
          goTo = 'signup/serviceProviderRegister'
        />
      </div>
    </div>
  );
};

export default GetStarted;
