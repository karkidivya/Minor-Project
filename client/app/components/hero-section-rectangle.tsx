import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hero-section-rectangle.module.css";

const HeroSectionRectangle: NextPage = () => {
  const router = useRouter();

  const onCloudsImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className={styles.heroSectionRectangle}>
      <div className={styles.navbarInner}>
        <img
          className={styles.cloudsIcon}
          loading="eager"
          alt=""
          src="/ellipse-1@2x.png"
          onClick={onCloudsImageClick}
        />
        <div className={styles.homeFrame}>
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
            <div className={styles.searchEllipseShapeParent}>
              <div className={styles.searchEllipseShape} />
              <div className={styles.register1}>Register</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSectionRectangle;
