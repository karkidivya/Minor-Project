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

async function getServiceProvider(categoryId: string, setData: any){
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceProvider/byCategoryId/${categoryId}`
  const newData = await axios.get(url)
  console.log("The url is\n",url);
  console.log(newData.data)
  setData(newData.data.serviceProviders)
}
const FrameContainer: NextPage = () => {
  const {category} = useAppSelector((state) => state.booking)
  const [ serviceProvider, setServiceProvider ] = useState([dummyData])
  useEffect(() =>{
    getServiceProvider(category.categoryId, setServiceProvider)
  }, [])

  return (
    <div className={styles.frameContainer}>
      {serviceProvider.map( (provider: any, idx: number) =>{
        return <ProfileViewButton key = {idx} serviceProvider = {provider}/>
      })}
    </div>
  );
};

export default FrameContainer;