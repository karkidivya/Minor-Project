'use client'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  const router = useRouter();

  const onMainBGImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

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
          <div className={styles.home}>
            <div className={styles.home1}>Home</div>
          </div>
          <div className={styles.customerService}>
            <div className={styles.home2}>Customer Service</div>
          </div>
          <div className={styles.about}>
            <div className={styles.home3}>About</div>
          </div>
          <button className={styles.register}>
            <div className={styles.becomeAProParent}>
              <div className={styles.becomeAPro} />
              <div className={styles.register1}>Register</div>
            </div>
          </button>
        </div>
      </header>
      <h3 className={styles.categories}>Categories</h3>
    </section>
  );
};

export default FrameComponent5;
