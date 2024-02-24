import type { NextPage } from "next";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ChatFrame from "./chat-frame";
import styles from "./frame-morning.module.css";

const FrameMorning: NextPage = () => {
  return (
    <section className={styles.frameMorning}>
      <div className={styles.frameAfternoon}>
        <div className={styles.frameEvening}>
          <div className={styles.dateFrame}>
            <div className={styles.withinDaysChooser}>
              <div className={styles.date}>Date</div>
              <div className={styles.lineVector}>
                <Button
                  className={styles.mingcutedownfillThumbnail}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "rgba(66, 120, 240, 0.1)",
                    borderRadius: "15px",
                    "&:hover": { background: "rgba(66, 120, 240, 0.1)" },
                    height: 33,
                  }}
                >
                  Today
                </Button>
                <Button
                  className={styles.helpSection}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#fff",
                    borderRadius: "15px",
                    "&:hover": { background: "#fff" },
                    height: 33,
                  }}
                >
                  Within 3 Days
                </Button>
              </div>
              <div className={styles.lineVector1}>
                <Button
                  className={styles.lineVectorChild}
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#fff",
                    borderRadius: "15px",
                    "&:hover": { background: "#fff" },
                    height: 33,
                  }}
                >
                  Within a Week
                </Button>
                <FormControl
                  className={styles.parent}
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
                    width: "45.535714285714285%",
                    height: "33px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 14,
                      fontWeight: "Medium",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "31px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent="null"
                  >
                    <MenuItem>Choose Dates</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
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
                  IconComponent={() => (
                    <img
                      width="23px"
                      height="13px"
                      src="/vector.svg"
                      style={{ marginRight: "23px" }}
                    />
                  )}
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
          <button className={styles.help}>
            <b className={styles.help1}>Help</b>
            <img className={styles.reviewsIcon} alt="" src="/vector-1.svg" />
          </button>
        </div>
      </div>
      <ChatFrame />
    </section>
  );
};

export default FrameMorning;
