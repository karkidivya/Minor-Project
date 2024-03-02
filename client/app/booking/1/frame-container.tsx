'use client'
import type { NextPage } from "next";
import ProfileViewButton from "../components/profile-view-button";
import styles from "./frame-container.module.css";
import axios from "axios";
import { useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
const dummyData = {
  name: "David Beckham",
  rating: 4,
  proficiency: "Expert",
  serviceProviderId: "149",
  profilePicture: "/ellipse-22@2x.png",
  introduction: "As a skilled furniture assembler, I'm here to make your home projects hassle-free. With attention to detail and efficiency, I'll quickly and expertly assemble your furniture, saving you time and ensuring a seamless experience. Let me handle the hard work so you can enjoy your new pieces stress-free.",
  fullName: "DavidBeckham",
}

async function getServiceProvider(categoryName: string, setData: any){
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`)
  const filteredData = data.data.reduce((acc: any, curr: any) => {
    return {...acc, [curr.categoryName.toLowerCase()]: curr.categoryId}
  }, {})
  console.log(filteredData)
  categoryName = categoryName.toLowerCase()
  console.log(filteredData[`${categoryName}`])
  const newData = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceProviders/${filteredData[`${categoryName}`]}`)
  console.log(newData.data)
  setData(newData.data.serviceProviders)
  // setData(newData.data)


}
const FrameContainer: NextPage = () => {
  const {category} = useAppSelector((state) => state.booking)
  const [ serviceProvider, setServiceProvider ] = useState([dummyData])
  useEffect(() =>{
    getServiceProvider(category, setServiceProvider)
  }, [])

  return (
    <div className={styles.frameContainer}>
      {serviceProvider.map( provider =>{
        return <ProfileViewButton serviceProvider = {provider}/>
      })}
    </div>
  );
};

export default FrameContainer;