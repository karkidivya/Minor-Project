import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.frameInstance}>
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <div className={styles.aboutKaamsewa}>About KaamSewa</div>
            <div className={styles.ourTeam}>Our Team</div>
            <div className={styles.partners}>Partners</div>
          </div>
          <div className={styles.aboutUsGroup}>
            <h1 className={styles.aboutUs1}>Support</h1>
            <div className={styles.aboutKaamsewa1}>About KaamSewa</div>
            <div className={styles.ourTeam1}>Our Team</div>
            <div className={styles.partners1}>Partners</div>
          </div>
          <div className={styles.aboutUsContainer}>
            <h1 className={styles.aboutUs2}>Contact</h1>
            <div className={styles.aboutKaamsewa2}>support@kaamsewa.com</div>
            <div className={styles.ourTeam2}>+977 9812345678</div>
            <div className={styles.partners2}>Partners</div>
          </div>
          <div className={styles.footerFrameName}>
            <h1 className={styles.aboutUs3}>Get the App</h1>
            <div className={styles.aboutKaamsewa3}>About KaamSewa</div>
            <div className={styles.ourTeam3}>Our Team</div>
            <img
              className={styles.screenshot20231029At1048}
              loading="eager"
              alt=""
              src="/screenshot-20231029-at-1048-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.copyrightFrame}>
        <div className={styles.frameInstanceName}>
          <div className={styles.frameWithInstagramAndFaceb}>
            <img
              className={styles.mdiinstagramIcon}
              loading="eager"
              alt=""
              src="/mdiinstagram.svg"
            />
            <img
              className={styles.icsharpFacebookIcon}
              loading="eager"
              alt=""
              src="/icsharpfacebook.svg"
            />
            <img
              className={styles.vectorsForLogosAlignment}
              alt=""
              src="/vector-9.svg"
            />
            <img
              className={styles.rightReservedText}
              alt=""
              src="/vector-10.svg"
            />
          </div>
          <div className={styles.kaamsewaTechnologiesAll}>
            © 2023 KaamSewa Technologies- All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
