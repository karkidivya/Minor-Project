import type { NextPage } from "next";
import FrameComponent from "./sign-up-frame-component";
import styles from "./sign-up1.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.signup2}>
      <FrameComponent />
    </div>
  );
};

export default SignUp;
