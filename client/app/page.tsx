import type { NextPage } from "next";
import FrameComponent5 from "./components/frame-component5";
import CategoryItem from "./components/category-item";
import FrameComponent4 from "./components/frame-component4";
import HowItWorks from "./components/how-it-works";
import FrameComponent2 from "./components/frame-component2";
import GetStarted from "./components/get-started";
import FrameComponent from "./components/frame-component";
import Footer from "./components/footer";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <FrameComponent5 />
      <section className={styles.homeRepair}>
        <div className={styles.plumber}>
          <CategoryItem />
        </div>
      </section>
      <FrameComponent4 />
      <HowItWorks />
      <section className={styles.getStartedButton}>
        <FrameComponent2 />
        <GetStarted />
      </section>
      <div className={styles.teamAndPartnersText}>
        <h1 className={styles.contactUs}>
          <span>Contact</span>
          <span className={styles.span}>{` `}</span>
          <span>Us</span>
        </h1>
      </div>
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;