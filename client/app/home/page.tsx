import type { NextPage } from "next";
import HeroSectionRectangle from "../components/hero-section-rectangle";
import HeroSection from "../components/hero-section";
import HowItWorks from "../components/how-it-works";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./styles.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <HeroSectionRectangle />
      <section className={styles.clouds}>
        <HeroSection />
        <HowItWorks />
      </section>
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsInner}>
          <h1 className={styles.aboutUs1}>
            <span>About</span>
            <span className={styles.span}>{` `}</span>
            <span>Us</span>
          </h1>
          <div className={styles.clouds1}>
            <img
              className={styles.aboutUsImgIcon}
              loading="eager"
              alt=""
              src="/aboutusimg@2x.png"
            />
            <div className={styles.aboutUsDscrp}>
              <p className={styles.welcomeToKaamsewaYourTrus}>
                <span className={styles.welcomeTo}>{`Welcome to `}</span>
                <span className={styles.kaamsewa}>KaamSewa</span>
                <span>
                  , your trusted partner in simplifying your home services
                  needs.
                </span>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.atKaamsewaWeUnderstandTha}>
                <span>{`At `}</span>
                <span className={styles.kaamsewa1}>KaamSewa</span>
                <span>
                  , we understand that managing your home services can be a
                  daunting task. Whether you need a plumber, electrician,
                  cleaner, or any other home service provider, finding the right
                  professional for the job should be convenient and stress-free.
                  That's where we come in.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerFrame}>
        <div className={styles.ourMission}>
          <div className={styles.missionInner}>
            <h1 className={styles.ourMission1}>
              <span>Our</span>
              <span className={styles.span1}>{` `}</span>
              <span className={styles.mission}>Mission</span>
            </h1>
            <div className={styles.clouds2}>
              <div className={styles.ourMissionIs}>
                Our mission is to connect homeowners with reliable and skilled
                service providers in the most effortless and efficient way
                possible. We aim to transform the way you approach home
                maintenance and improvement by offering a comprehensive,
                user-friendly platform that caters to all your service
                requirements.
              </div>
              <img
                className={styles.mission1Icon}
                loading="eager"
                alt=""
                src="/mission-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.viewAllProductsButton}>
        <h1 className={styles.contactUs}>
          <span>Contact</span>
          <span className={styles.span2}>{` `}</span>
          <span>Us</span>
        </h1>
      </div>
      <FrameComponent
        propPadding="0px var(--padding-xl) var(--padding-smi)"
        propTop="0%"
        propBottom="0%"
        propTop1="0%"
        propBottom1="0%"
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
