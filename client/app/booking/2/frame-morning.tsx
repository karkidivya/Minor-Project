import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Chip,
  Grid,
} from "@mui/material";
import ChatFrame from "../components/chat-frame";
import styles from "./frame-morning.module.css";

const FrameMorning: NextPage = () => {
  return (
    <section className={styles.frameMorning}>
      <div className={styles.frameAfternoon}>
        <div className={styles.frameEvening}>
          <div className={styles.dateFrame}>
            <div className={styles.withinDaysChooser}>
              <div className={styles.date}>Date</div>

                <Grid container direction={'column'}>
                  <Grid container>
                    <Grid item sm = {6} display={'flex'} justifyContent={'center'}>
                      <Chip label = "Today" variant = "outlined" sx = {{width: '100%'}} />
                    </Grid>
                    <Grid item sm = {6} display={'flex'} justifyContent={'center'}>
                      <Chip label = "Tommorrow" />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item sm = {6} display={'flex'} justifyContent={'center'}>
                      <Chip label = "Within a Week" />
                    </Grid>
                    <Grid item sm = {6} display={'flex'} justifyContent={'center'}>
                      <Chip label = "Choose a Date" />
                    </Grid>

                  </Grid>
                </Grid>


              <div className={styles.frameReviews} />
              <div className={styles.timeOfDay}>Time of Day</div>
            </div>
            <div className={styles.vectorSeparator}>
              <div className={styles.morningampm}>
                <div className={styles.afternoonampm}>
                  <img
                    className={styles.eveningampmIcon}
                    loading="eager"
                    alt=""
                    src="/frame-905.svg"
                  />
                  <img
                    className={styles.eveningampmIcon1}
                    loading="eager"
                    alt=""
                    src="/frame-905.svg"
                  />
                  <img
                    className={styles.eveningampmIcon2}
                    loading="eager"
                    alt=""
                    src="/frame-905.svg"
                  />
                </div>
                <div className={styles.frameExclude}>
                  <div className={styles.morning8am}>Morning (8am - 12pm)</div>
                  <div className={styles.afternoon12pm}>
                    Afternoon (12pm - 5pm)
                  </div>
                  <div className={styles.evening5pm}>Evening (5pm - 9pm)</div>
                </div>
              </div>
              <div className={styles.monDecDate}>
                <img
                  className={styles.monDecDateChild}
                  loading="eager"
                  alt=""
                  src="/line-5.svg"
                />
                <div className={styles.orChooseA}>
                  or choose a specific time
                </div>
                <img
                  className={styles.monDecDateItem}
                  loading="eager"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
              <FormControl
                className={styles.profileFrame}
                variant="standard"
                sx={{
                  borderColor: "#373737",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                  height: "41px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "41px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "Medium",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "35px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                >
                  <MenuItem>I’m flexible</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <img
                className={styles.vectorSeparatorChild}
                loading="eager"
                alt=""
                src="/line-7.svg"
              />
            </div>
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
                  <img
                    className={styles.mdirupeeIcon}
                    loading="eager"
                    alt=""
                    src="/mdirupee.svg"
                  />
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
