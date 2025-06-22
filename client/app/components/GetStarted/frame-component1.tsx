import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export type FrameComponent1Type = {
  rectangle9?: string;
  hearThatTheSweetSignOfRel?: string;
  signUp?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  goTo: string
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle9,
  hearThatTheSweetSignOfRel,
  signUp,
  propHeight,
  propWidth,
  goTo
}) => {
  const searchIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const feedbackGroupTitleStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);
  const router = useRouter()

  const handleClick = () =>{
    router.push(goTo)
  }

  return (
    <div className={styles.search}>
      <img
        className={styles.searchIcon}
        alt=""
        src={rectangle9}
        style={searchIconStyle}
      />
      <div className={styles.hearThatThe}>{hearThatTheSweetSignOfRel}</div>
      <Button variant = "contained" sx = {{borderRadius: "var(--br-3xs)"}} onClick = {handleClick}>
        <b className = {styles.signUp}>{signUp}</b>
      </Button>
    </div>
  );
};

export default FrameComponent1;
