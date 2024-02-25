import type { NextPage } from "next";
import ProfileViewButton from "../components/profile-view-button";
import styles from "./frame-container.module.css";

const FrameContainer: NextPage = () => {
  return (
    <div className={styles.frameContainer}>
      <ProfileViewButton />
    </div>
  );
};

export default FrameContainer;
