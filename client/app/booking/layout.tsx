'use client'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

import Stepper from '../components/Stepper';
import Footer from "../components/footer";
import HowItWorks from "../components/how-it-works";
import { useAppSelector } from "@/lib/hooks";


const FrameComponent5 = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();


  const { bookingStep } = useAppSelector((state) => state.booking)
  const user = useAppSelector((state) => state.user)
  if( !user.isAuthorized){
    router.push('/login/userLogin')
  }
  return (
    <div style = {{display:'flex', flexDirection: 'column', alignItems: 'center', background: '#F3F3F3'}}>
        <section className={styles.container}>
        <header className={styles.navbarInner}>
            <img
            className={styles.mainBgIcon}
            loading="eager"
            alt=""
            src="/ellipse-1@2x.png"
            onClick={() => router.push('/')}
            />
            <Stepper step = {bookingStep}/>
        </header>
        </section>
        {children}
        <HowItWorks />
        <Footer />
    </div>
  );
};

export default FrameComponent5;