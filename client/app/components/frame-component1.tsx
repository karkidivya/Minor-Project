import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  rectangle9?: string;
  hearThatTheSweetSignOfRel?: string;
  signUp?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle9,
  hearThatTheSweetSignOfRel,
  signUp,
  propHeight,
  propWidth,
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

  return (
    <div className={styles.search}>
      <img
        className={styles.searchIcon}
        alt=""
        src={rectangle9}
        style={searchIconStyle}
      />
      <div className={styles.hearThatThe}>{hearThatTheSweetSignOfRel}</div>
      <button
        className={styles.feedbackGroupTitle}
        style={feedbackGroupTitleStyle}
      >
        <b className={styles.signUp}>{signUp}</b>
      </button>
    </div>
  );
};

export default FrameComponent1;