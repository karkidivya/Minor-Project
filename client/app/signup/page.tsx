import type { NextPage } from "next";
import styles from "./signup.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

const SignUpOrLogIn: NextPage = () => {
  return (
    <div className={styles.signUpOrLogIn}>
      <div className={styles.frameSignUpLogIn}>
        <h1 className={styles.kaamsewa}>KaamSewa</h1>
        <Button variant = "contained" fullWidth>
          <Link href = "signup">Sign In</Link>
        </Button>
        <Button variant = "outlined" fullWidth>
          <Link href = "login">Login</Link>
        </Button>

        <div className={styles.bySigningUpContainer}>
          <span>
            <span
              className={styles.bySigningUp}
            >{`By signing up you agree to our `}</span>
            <b className={styles.termsOfUse}>Terms of Use</b>
            <span className={styles.and}>{` and `}</span>
            <b className={styles.privacyPolicy}>Privacy Policy</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpOrLogIn;
