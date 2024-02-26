'use client'
import type { NextPage } from "next";
import ProfileViewButton from "../components/profile-view-button";
import styles from "./frame-container.module.css";
import axios from "axios";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";

async function getServiceProvider(categoryName: string, setData: any){
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`)
  const filteredData = data.data.map( (item: any) => {
    return { [item.categoryName.toLowerCase()]: item.categoryId}
  })
  
  console.log(filteredData)
  const newData = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories/${filteredData[categoryName]}`)
  // setData(newData.data)


}
const FrameContainer: NextPage = () => {
  const {category} = useAppSelector((state) => state.booking)
  const [ serviceProvider, setServiceProvider ] = useState()
  getServiceProvider(category, setServiceProvider)

  return (
    <div className={styles.frameContainer}>
      <ProfileViewButton />
    </div>
  );
};

export default FrameContainer;