import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./plumber.module.css";

export type PlumberType = {
  rectangle7?: string;
  plumber?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Plumber: NextPage<PlumberType> = ({
  rectangle7,
  plumber,
  propHeight,
}) => {
  const plumberStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.plumber} style={plumberStyle}>
      <img className={styles.plumberChild} alt="" src="/rectangle-6@2x.png" />
      <img
        className={styles.whatClientSayAboutHim}
        loading="eager"
        alt=""
        src={rectangle7}
      />
      <div className={styles.ellipse}>
        <div className={styles.plumber1}>{plumber}</div>
      </div>
    </div>
  );
};

export default Plumber;
