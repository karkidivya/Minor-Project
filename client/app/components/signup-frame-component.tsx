import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import styles from "./signup-frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.kaamsewaParent}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.profileInformation}>Profile Information</h3>
      <div className={styles.profilePicture}>Profile Picture</div>
      <div className={styles.imageParent}>
        <FormControl
          className={styles.image}
          variant="standard"
          sx={{
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#d9d9d9",
            borderRadius: "1px",
            width: "95px",
            height: "32px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "32px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "32px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "32px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "32px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#000",
              fontSize: 10,
              fontWeight: "SemiBold",
              fontFamily: "Roboto",
              textAlign: "left",
              p: "0 !important",
              justifyContent: "center",
            },
          }}
        >
          <InputLabel color="secondary" />
          <Select
            color="secondary"
            disableUnderline
            displayEmpty
            // IconComponent="null"
          >
            <MenuItem>Choose Picture</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className={styles.jpg}>100.jpg</div>
      </div>
      <div className={styles.biointroduction}>Bio/Introduction</div>
      <textarea
        className={styles.frameChild}
        placeholder="Let’s Us know about you!"
        rows={5}
        cols={16}
      />
      <div className={styles.location}>Location</div>
      <TextField
        className={styles.frameItem}
        placeholder="Location"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#9fa0a0" },
          "& .MuiInputBase-root": {
            height: "30px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            fontSize: "12px",
          },
          "& .MuiInputBase-input": { color: "#9fa0a0" },
        }}
      />
      <Button
        className={styles.frameInner}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#4278f0",
          borderRadius: "15px",
          "&:hover": { background: "#4278f0" },
          width: 126,
          height: 25,
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default FrameComponent;
