import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./plumber.module.css";

export type PlumberType = {
  image?: string;
  categoryName?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Plumber: NextPage<PlumberType> = ({
  image,
  categoryName,
  propHeight,
}) => {
  const plumberStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles['category-item']} style={plumberStyle}>
      <img className={styles.plumberChild} alt="" src="/rectangle-6@2x.png" />
      <img
        className={styles.whatClientSayAboutHim}
        loading="eager"
        alt=""
        src={image}
      />
      <div className={styles.ellipse}>
        <div className={styles.plumber1}>{categoryName}</div>
      </div>
    </div>
  );
};

export default Plumber;
