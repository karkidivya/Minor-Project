'use client'
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import { Button } from "@mui/material";
import styles from "./chat-frame.module.css";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { bookingStep, serviceProvider } from "@/lib/features/booking/bookingSlice";

export type ChatFrameType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propFlexWrap1?: CSSProperties["flexWrap"];
};

const ChatFrame: NextPage<ChatFrameType> = ({
  propFlex,
  propMinWidth,
  propWidth,
  propFlexWrap,
  propFlexWrap1,
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

  const furnitureAssembledTextStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap1,
    };
  }, [propFlexWrap1]);

  const [ user, setUser ] = useState('0')
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClick = () =>{
    console.log("I have been clicked")
    dispatch(serviceProvider(user))
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
                src="/ellipse-22@2x.png"
              />

            </div>
            <div className={styles.helpFrame}>
              <h3 className={styles.davidBecham}>David Beckham</h3>
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
                  width: 108,
                  height: 41,
                }}
              >
                Elite
              </Button>
              <div className={styles.youChat}>
                <img
                  className={styles.materialSymbolsstarIcon}
                  loading="eager"
                  alt=""
                  src="/materialsymbolsstar.svg"
                />
                <div className={styles.reviews}>5.0 (700 reviews)</div>
              </div>
              <div
                className={styles.furnitureAssembled}
              >{`500 Furniture Assembled `}</div>
            </div>
          </div>
          <div className={styles.helpText}>
            <div className={styles.hr}>$300.00/hr</div>
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
              <div className={styles.howCanI}>How can I help:</div>
            </div>
            <div className={styles.asASkilled}>
              As a skilled furniture assembler, I'm here to make your home
              projects hassle-free. With attention to detail and efficiency,
              I'll quickly and expertly assemble your furniture, saving you time
              and ensuring a seamless experience. Let me handle the hard work so
              you can enjoy your new pieces stress-free.
            </div>
            <div className={styles.howToHelpButton1}>
              <div className={styles.readMore}>Read More</div>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.excludeProfile}>
        <div
          className={styles.furnitureAssembledText}
          style={furnitureAssembledTextStyle}
        >
          <img
            className={styles.excludeIcon}
            loading="eager"
            alt=""
            src="/exclude.svg"
          />
          <div className={styles.userNameFrame}>
            <div className={styles.datePickerFrame}>
              <div className={styles.johnDoe}>John Doe</div>
              <div className={styles.onMondec13}>on Mon,Dec 13</div>
            </div>
            <div className={styles.assemblyServiceTitle}>
              <div className={styles.fantasticFurnitureAssembly}>
                "Fantastic furniture assembly service! Quick, efficient, and
                hassle-free. Highly recommend!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFrame;
