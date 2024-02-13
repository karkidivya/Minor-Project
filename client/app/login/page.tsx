import type { NextPage } from "next";
import EmailAddressFrame from "../components/email-address-frame";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <EmailAddressFrame />
    </div>
  );
};

export default Login;