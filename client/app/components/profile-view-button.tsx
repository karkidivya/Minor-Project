import type { NextPage } from "next";
import ChatFrame from "./chat-frame";
import styles from "./profile-view-button.module.css";

const ProfileViewButton: NextPage = () => {
  return (
    <section className={styles.profileViewButton}>
      <ChatFrame
        propFlex="unset"
        propMinWidth="unset"
        propWidth="834px"
        propFlexWrap="wrap"
        propFlexWrap1="wrap"
      />
    </section>
  );
};

export default ProfileViewButton;
