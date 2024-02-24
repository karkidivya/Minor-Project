import type { NextPage } from "next";
import FullNameFrame from "../components/full-name-frame";
import styles from "./sign-up7.module.css";

const SignUp7: NextPage = () => {
  return (
    <div className={styles.signup}>
      <FullNameFrame />
    </div>
  );
};

export default SignUp7;
