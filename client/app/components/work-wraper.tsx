import type { NextPage } from "next";
import styles from "./work-wraper.module.css";

const WorkWraper: NextPage = () => {
  return (
    <div className={styles.workWraper}>
      <div className={styles.search}>
        <img
          className={styles.searchChild}
          loading="eager"
          alt=""
          src="/ellipse-2@2x.png"
        />
        <b className={styles.search1}>Search</b>
        <div className={styles.tellUsWhat}>
          Tell us what service you need, and we'll show you a list of qualified
          professionals in your area
        </div>
      </div>
      <div className={styles.compare}>
        <img
          className={styles.compareChild}
          loading="eager"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <b className={styles.compare1}>Compare</b>
        <div className={styles.compareServiceProviders}>
          Compare service providers based on ratings, reviews, and pricing to
          make an informed decision
        </div>
      </div>
      <div className={styles.book}>
        <img
          className={styles.bookChild}
          loading="eager"
          alt=""
          src="/ellipse-4@2x.png"
        />
        <b className={styles.book1}>Book</b>
        <div className={styles.bookYourChosen}>
          Book your chosen professional right through our platform and set the
          appointment at your convenience
        </div>
      </div>
      <div className={styles.enjoy}>
        <img
          className={styles.enjoyChild}
          loading="eager"
          alt=""
          src="/ellipse-5@2x.png"
        />
        <b className={styles.enjoy1}>Enjoy</b>
        <div className={styles.sitBackRelax}>
          Sit back, relax, and let the expert take care of your home service
          needs
        </div>
      </div>
    </div>
  );
};

export default WorkWraper;
