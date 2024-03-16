'use client'
import type { NextPage } from "next";
import Select from '../../components/Select'
import styles from "./frame-morning.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { bookingDateAndTime } from "@/lib/features/booking/bookingSlice";
import axios from "axios";



const FrameMorning: NextPage = () => {
  const [dateAndTime, setDateAndTime ] = useState({date: dayjs(), time: ""});
  const dispatch = useAppDispatch()
  const router = useRouter();
  const {bookingStep, ...booking} = useAppSelector(state => state.booking)
  const { id } = useAppSelector((state) => state.user.userDetail)
  
  const handleChange = (name: string , value: string | Date | Dayjs | null ) =>{
    setDateAndTime((prev) =>{
      return {...prev, [name]: value}
    })
  }
  
  const handleSubmit = async () =>{
    dispatch(bookingDateAndTime({...dateAndTime, date: dateAndTime.date.toString()}))
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking/addBooking`, {...booking,customerId: id,  categoryId: booking.category.categoryId, bookingStatus: 'pending'})
    console.log(booking, "adcjsc")
    
    router.push('/')
    console.log(booking)
  }
  
  return (
    <section className={styles.frameMorning}>
      <div className={styles.frameAfternoon}>
        <div className={styles.frameEvening}>
          <div className={styles.dateFrame}>
            <div className={styles.withinDaysChooser}>
              <div className={styles.date}>Date</div>
              <DatePicker  label = ""  defaultValue = {dateAndTime.date} value = {dateAndTime.date} onChange={(newValue) => { handleChange("date", newValue?.startOf('day') as Dayjs)}}/>
              <div className={styles.frameReviews} />
            </div>
            <div className={styles.timeOfDay}>Time of Day</div>
            <Select option = {[{label: 'Morning (8 am - 9am)', value: 'Morning (8am - 9am)'},{label: 'Noon (11am - 2pm)', value: 'Noon (11am - 2pm)'},{label: 'Evening (3pm -6pm)', value: 'Evening (3pm -6pm)'}]} value = {dateAndTime.time} setValue = {(newValue) =>{handleChange("time", newValue)}} flexDirection = "column"/>
            <div className={styles.frameReviews} />

            <Button
              className={styles.nextButton}
              disableElevation={true}
              variant="contained"
              onClick = {handleSubmit}
              fullWidth
              sx={{
                marginTop: '30px',
                alignSelf: 'flex-start',
                textTransform: "none",
                color: "#fff",
                background: "#4278f0",
                borderRadius: "15px",
                "&:hover": { background: "#4278f0" },
              }}
            >
              Next
            </Button>
          </div>
        </div>
        <div className={styles.chooseDatesFrame}>
          <div className={styles.chooseDatesFrameInner}>
            <div className={styles.mingcutesafeLockLineParent}>
              <img
                className={styles.mingcutesafeLockLineIcon}
                loading="eager"
                alt=""
                src="/mingcutesafelockline.svg"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.alwaysHavePeaceOfMindAllParent}>
                  <h3 className={styles.alwaysHavePeaceContainer}>
                    <span>{`Always have peace of mind. All workforces undergo ID and criminal background checks. `}</span>
                    <b className={styles.learnMore}>Learn More</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameMorning;
