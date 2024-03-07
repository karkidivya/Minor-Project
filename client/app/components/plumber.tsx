'use client'
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./plumber.module.css";
import {useRouter} from 'next/navigation'
import { useAppDispatch } from "@/lib/hooks";
import { setCategory } from '@/lib/features/booking/bookingSlice'

export type PlumberType = {
  image?: string;
  categoryName?: string;
  categoryId: number | string 
  /** Style props */
  propHeight?: CSSProperties["height"];
};

const Plumber: NextPage<PlumberType> = ({
  image,
  categoryName,
  categoryId,
  propHeight,
}) => {
  const plumberStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = () =>{
    dispatch(setCategory({categoryId, categoryName}))
    router.push('/booking')
  }
  return (
    <div className={styles['category-item']} style={plumberStyle} onClick = {handleClick}>
      <img
        className={styles.whatClientSayAboutHim}
        loading="eager"
        alt=""
        src={`/${image}`}
      />
      <div className={styles.ellipse}>
        <div className={styles.plumber1}>{categoryName}</div>
      </div>
    </div>
  );
};

export default Plumber;


