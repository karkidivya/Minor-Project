'use client'
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

  const handleClick = () =>{
    console.log("i am ", categoryName)
  }
  return (
    <div className={styles['category-item']} style={plumberStyle} onClick = {handleClick}>
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
