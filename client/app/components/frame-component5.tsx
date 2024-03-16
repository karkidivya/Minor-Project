'use client'
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./frame-component5.module.css";
import { Button } from "@mui/material";
import { RoundaboutLeftRounded } from "@mui/icons-material";

const FrameComponent5: NextPage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's login status

  const onMainBGImageClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const handleClick = () => {
    if (isLoggedIn) {
      // If logged in, perform logout
      // You can add your logout logic here
      setIsLoggedIn(false);
      // Redirect to login page
      router.push('/');
    } else {
      // If not logged in, redirect to login page
      router.push('/login');
    }
  };

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
          <div className={styles.about} onClick={() => router.push('/customerDashboard')}>
            <div className={styles.home3}>Dashboard</div>
          </div>
          {isLoggedIn ? ( // Render "Logout" button if user is logged in
            <button className={styles.register} onClick={handleClick}>
              <div className={styles.becomeAProParent}>
                <div className={styles.becomeAPro} />
                <div className={styles.register1}>Logout</div>
              </div>
            </button>
          ) : ( // Render "Login" button if user is not logged in
            <button className={styles.register} onClick={handleClick}>
              <div className={styles.becomeAProParent}>
                <div className={styles.becomeAPro} />
                <div className={styles.register1}>Login</div>
              </div>
            </button>
          )}
        </div>
      </header>
      <h3 className={styles.categories}>Categories</h3>
    </section>
  );
};

export default FrameComponent5;