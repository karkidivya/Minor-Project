import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.readyText}>
      <h3 className={styles.featuredProfessionals}>Featured Professionals</h3>
      <div className={styles.contactUsGroup}>
        <FrameComponent3 />
        <FrameComponent3 />
        <FrameComponent3 />
        <FrameComponent3 />
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.fearrowUpIcon}
            loading="eager"
            alt=""
            src="/fearrowup@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
