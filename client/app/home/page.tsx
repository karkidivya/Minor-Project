import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import ServiceCategory from "../components/ServiceCategory";
import HowItWorks from "../components/how-it-works";
import FrameComponent2 from "../components/frame-component2";
import Contact from "../components/Contact";
import Footer from "../components/footer";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <FrameComponent5 />
      <section className={styles.homeRepair}>
        <div className={styles.plumber}>
          <ServiceCategory />
        </div>
      </section>
      <HowItWorks />
      <section className={styles.getStartedButton}>
        <FrameComponent2 />
      </section>
      <div className={styles.teamAndPartnersText}>
        <h1 className={styles.contactUs}>
          <span>Contact</span>
          <span className={styles.span}>{` `}</span>
          <span>Us</span>
        </h1>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;