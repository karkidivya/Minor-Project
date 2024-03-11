'use client'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./frame-component5.module.css";
import { Button } from "@mui/material";
import { RoundaboutLeftRounded } from "@mui/icons-material";

const FrameComponent5: NextPage = () => {
  const router = useRouter();

  const onMainBGImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = () =>{
    router.push('/sign-up')
  }
  return (
    <section className={styles.container}>
      <header className={styles.navbarInner}>
        <img
          className={styles.mainBgIcon}
          loading="eager"
          alt=""
          src="/ellipse-1@2x.png"
          onClick={onMainBGImageClick}
        />
        <div className={styles.text}>
          <div className={styles.home} onClick={() => router.push('/home')}>
            <div className={styles.home1}>Home</div>
          </div>
          <div className={styles.customerService} onClick={() => router.push('/customer-service')}>
            <div className={styles.home2} >Customer Service</div>
          </div>
          <div className={styles.about} onClick={() => router.push('/about')}>
            <div className={styles.home3} >About</div>
          </div>
          <div className={styles.about} onClick={() => router.push('/payment')}>
            <div className={styles.home3} >Payment</div>
          </div>
          <button className={styles.register} onClick={() => router.push('/login')}>
            <div className={styles.becomeAProParent}>
              <div className={styles.becomeAPro} />
              <div className={styles.register1} >Login</div>
            </div>
          </button>
          <button className={styles.register} onClick={() => router.push('/sign-up')}>
            <div className={styles.becomeAProParent}>
              <div className={styles.becomeAPro} />
              <div className={styles.register1} >Register</div>
            </div>
          </button>
        </div>
      </header>
      <h3 className={styles.categories}>Categories</h3>
    </section>
  );
};

export default FrameComponent5;
