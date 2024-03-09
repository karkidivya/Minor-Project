import type { NextPage } from "next";
import Plumber from "./plumber";
import styles from "./category-item.module.css";
import axios from "axios";
async function getData(){
  const backendUrl = process.env.BACKEND_URL
  const res = await fetch(`${backendUrl}/serviceCategory`)
  
  return res.json()
}
export default async function CategoryItem(){
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
  const data = await getData()

  return (
    <div className={styles.categoryItem}>
      {/* {data.data.map((item: any, idx: number) =>  <Plumber key ={idx} image = {item.image} categoryName = {item.categoryName} categoryId = {item.categoryId} propHeight = "225px" />)} */}
    </div>
  );
};