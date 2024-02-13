import type { NextPage } from "next";
import WorkWraper from "./work-wraper";
import styles from "./how-it-works.module.css";

const HowItWorks: NextPage = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howItWorks1}>How It Works</h2>
      <WorkWraper />
    </section>
  );
};

export default HowItWorks;
