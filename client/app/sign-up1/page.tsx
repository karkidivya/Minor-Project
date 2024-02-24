import type { NextPage } from "next";
import FrameComponent from "../components/sign-up-frame-component";
import styles from "./signup.module.css";

const SignUp: NextPage = () => {
  return (
    <div className={styles.signup2}>
      <FrameComponent />
    </div>
  );
};

export default SignUp;
