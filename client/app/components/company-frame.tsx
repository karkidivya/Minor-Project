import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./company-frame.module.css";

const CompanyFrame: NextPage = () => {
  return (
    <div className={styles.companyFrame}>
      <h1 className={styles.kaamsewa}>KaamSewa</h1>
      <h3 className={styles.workHistory}>Work History</h3>
      <div className={styles.companyName}>Company Name</div>
      <Button
        className={styles.positionFrame}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#9fa0a0",
          fontSize: "12",
          background: "#fff",
          borderRadius: "5px",
          "&:hover": { background: "#fff" },
          width: 309,
        }}
      >
        Company Name
      </Button>
      <div className={styles.position}>Position</div>
      <Button
        className={styles.positionFrame1}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#9fa0a0",
          fontSize: "12",
          background: "#fff",
          borderRadius: "5px",
          "&:hover": { background: "#fff" },
          width: 309,
        }}
      >
        Position
      </Button>
      <div className={styles.timeOfWork}>Time of Work</div>
      <Button
        className={styles.positionFrame2}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#9fa0a0",
          fontSize: "12",
          background: "#fff",
          borderRadius: "5px",
          "&:hover": { background: "#fff" },
          width: 309,
        }}
      >
        Year of Work
      </Button>
      <Button
        className={styles.positionFrame3}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#000",
          borderRadius: "15px",
          "&:hover": { background: "#000" },
          width: 129,
          height: 25,
        }}
      >
        Add More
      </Button>
      <div className={styles.references}>References</div>
      <Button
        className={styles.positionFrame4}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#9fa0a0",
          fontSize: "12",
          background: "#fff",
          borderRadius: "5px",
          "&:hover": { background: "#fff" },
          width: 309,
        }}
      >
        Name of References
      </Button>
      <Button
        className={styles.positionFrame5}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "12",
          background: "#000",
          borderRadius: "15px",
          "&:hover": { background: "#000" },
          width: 129,
          height: 25,
        }}
      >
        Add More
      </Button>
      <Button
        className={styles.positionFrame6}
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

export default CompanyFrame;
