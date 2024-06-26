'use client'
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import styles from "./chat-frame.module.css";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { bookingStep, serviceProvider as f_serviceProvider } from "@/lib/features/booking/bookingSlice";
import RatingStars from "../../components/RatingStars";
import CheckIcon from '@mui/icons-material/Check';

const dummyData = {
  name: "David Beckham",
  rating: 4,
  proficiency: "Expert",
  serviceProviderId: "149",
  profilePicture: "/ellipse-22@2x.png",
  introduction: "As a skilled furniture assembler, I'm here to make your home projects hassle-free. With attention to detail and efficiency, I'll quickly and expertly assemble your furniture, saving you time and ensuring a seamless experience. Let me handle the hard work so you can enjoy your new pieces stress-free.",
  fullName: "DavidBeckham",
}
export type ChatFrameType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlexWrap1?: CSSProperties["flexWrap"];
  serviceProvider: any
};

const ChatFrame: NextPage<ChatFrameType> = ({
  propFlex,
  propMinWidth,
  propWidth,
  propFlexWrap,
  serviceProvider
}) => {
  const chatFrameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const continueButtonStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);



  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClick = () =>{
    console.log("I have been clicked")
    dispatch(f_serviceProvider(serviceProvider.serviceProviderId))
    dispatch(bookingStep(2))
    router.push('2')
  }
  return (
    <div className={styles.chatFrame} style={chatFrameStyle}>
      <div className={styles.selectContinueButton}>
        <div className={styles.customerReviewsFrameParent}>
          <div className={styles.customerReviewsFrame}>
            <div className={styles.assemblyStatusText}>
              <img
                className={styles.assemblyStatusTextChild}
                loading="eager"
                alt=""
                src={serviceProvider.profilePicture || ""}
              />

            </div>
            <div className={styles.helpFrame}>
              <div style = {{display: 'flex', }}>
                <h3 className={styles.davidBecham}>{serviceProvider.fullName}</h3>
                {serviceProvider.verificationStatus && 
                  <Tooltip title = "Verified">
                    <IconButton>
                      <CheckIcon color = {"primary"} />
                    </IconButton>
                  </Tooltip>
                }
              </div>
              <Button
                className={styles.helpFrameChild}
                startIcon={
                  <img
                    width="28px"
                    height="28px"
                    src="/materialsymbolstrophy.svg"
                  />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#8703d7",
                  fontSize: "18",
                  background: "#e5ecfd",
                  borderRadius: "10px",
                  "&:hover": { background: "#e5ecfd" },
                }}
              >
                {serviceProvider.proficiency}
              </Button>
              <div style = {{display: 'flex', alignItems: 'center'}}>
                <RatingStars height = {20} width={20} rating={serviceProvider.rating}/>
                <div className={styles.reviews}>{`${serviceProvider.rating ?? 0}`}</div>

              </div>

            </div>
          </div>
          <div className={styles.helpText}>
            <div className={styles.hr}>{`Rs. 300.00 /hr`}</div>
          </div>
        </div>
        <div className={styles.continueButton} style={continueButtonStyle}>
          <div className={styles.chatFrame1}>
              <Button variant = "contained" onClick = {handleClick}>
                Select & Continue
              </Button>
              <div className={styles.youCanChat}>
              You can chat with your service provider, adjust work details, or
              change the work time after booking
            </div>
          </div>
          <div className={styles.furnitureAssemblyService}>
            <div className={styles.howToHelpButton}>
              <div className={styles.howCanI}>My Introduction:</div>
            </div>
            <div className={styles.asASkilled}>
              {serviceProvider.introduction}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFrame;
