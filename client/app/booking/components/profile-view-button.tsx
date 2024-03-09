import ChatFrame from "./chat-frame";
import styles from "./profile-view-button.module.css";

const ProfileViewButton = ({serviceProvider}: {serviceProvider: any}) => {
  return (
    <section className={styles.profileViewButton}>
      <ChatFrame
        propFlex="unset"
        propMinWidth="unset"
        propWidth="834px"
        propFlexWrap="wrap"
        propFlexWrap1="wrap"
        serviceProvider = {serviceProvider}
      />
    </section>
  );
};

export default ProfileViewButton;
