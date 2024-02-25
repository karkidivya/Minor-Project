import type { NextPage } from "next";
import FrameMorning from "../components/frame-morning";
import ProfileViewButton from "../components/profile-view-button";
import styles from "./frame-container.module.css";

const FrameContainer: NextPage = () => {
  return (
    <div className={styles.frameContainer}>
      <FrameMorning />
      <ProfileViewButton />
    </div>
  );
};

export default FrameContainer;
