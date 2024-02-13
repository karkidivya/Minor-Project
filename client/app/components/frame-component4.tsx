import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.featuredSkillsTitle}>
        <button className={styles.help}>
          <b className={styles.help1}>Help</b>
          <img className={styles.listIcon} alt="" src="/list.svg" />
        </button>
        <div className={styles.lineSeparator}>
          <b className={styles.showMore}>Show More</b>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
