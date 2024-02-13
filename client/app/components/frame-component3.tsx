import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <div className={styles.headerLogoParent}>
      <div className={styles.headerLogo}>
        <img
          className={styles.helpCentersIcon}
          alt=""
          src="/rectangle-8-2@2x.png"
        />
        <div className={styles.featuredSkills}>
          <div className={styles.homeRepair}>
            <div className={styles.juanR}>Juan R.</div>
            <img className={styles.groupIcon} alt="" src="/group-1.svg" />
          </div>
          <div className={styles.whatClientSayAboutHim}>
            <img className={styles.frameIcon} alt="" src="/vector-1.svg" />
            <div className={styles.positiveReviews}>97% positive reviews</div>
          </div>
          <div className={styles.contactUs}>
            <img className={styles.infoBoxIcon} alt="" src="/vector-2.svg" />
            <div className={styles.completedTasks}>431 completed tasks</div>
          </div>
        </div>
      </div>
      <img className={styles.instanceChild} alt="" src="/line-1.svg" />
      <div className={styles.featuredSkills1}>Featured Skills</div>
      <div className={styles.helpMoving}>Help Moving</div>
      <div className={styles.homeRepair1}>Home Repair</div>
      <div className={styles.plumber}>Plumber</div>
      <img className={styles.instanceItem} alt="" src="/line-1.svg" />
      <div className={styles.clientSayings}>
        <div className={styles.whatClientSay}>What Client Say About Him?</div>
        <div className={styles.frameClientTestimonials}>
          <img
            className={styles.frameClientTestimonialsChild}
            loading="eager"
            alt=""
            src="/ellipse-6@2x.png"
          />
          <img
            className={styles.frameClientTestimonialsItem}
            loading="eager"
            alt=""
            src="/ellipse-7@2x.png"
          />
          <img
            className={styles.frameClientTestimonialsInner}
            loading="eager"
            alt=""
            src="/ellipse-8@2x.png"
          />
          <img
            className={styles.ellipseIcon}
            loading="eager"
            alt=""
            src="/ellipse-9@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
