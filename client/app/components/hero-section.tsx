import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hero-section.module.css";

const HeroSection: NextPage = () => {
  const router = useRouter();

  const onCloudsContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.heroSection1}>
      <img
        className={styles.f323151985Olkiwe9gf7p9qnvhu9Icon}
        loading="eager"
        alt=""
        src="/360-f-323151985-olkiwe9gf7p9qnvhu9v1dldoz3ofqrr4-1@2x.png"
      />
      <div className={styles.clouds}>
        <div className={styles.clouds1}>
          <h1 className={styles.yourIdealLifestyleContainer}>
            <p className={styles.yourIdealLifestyle}>
              Your Ideal Lifestyle, Our Expertise
            </p>
            <p className={styles.elevateYourEveryday}>Elevate Your Everyday</p>
          </h1>
        </div>
        <div className={styles.clouds2} onClick={onCloudsContainer1Click}>
          <div className={styles.clouds3}>
            <div className={styles.getStarted}>Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
