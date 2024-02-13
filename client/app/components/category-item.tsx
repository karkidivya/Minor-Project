import type { NextPage } from "next";
import Plumber from "./plumber";
import styles from "./category-item.module.css";

const CategoryItem: NextPage = () => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.electrician}>
        <img
          className={styles.contactUsIcon}
          loading="eager"
          alt=""
          src="/rectangle-6@2x.png"
        />
        <div className={styles.serviceCategories}>
          <div className={styles.electrician1}>electrician</div>
        </div>
      </div>
      <Plumber rectangle7="/rectangle-7@2x.png" plumber="Plumber" />
      <Plumber
        rectangle7="/rectangle-8@2x.png"
        plumber="Carpenter"
        propHeight="225px"
      />
      <Plumber
        rectangle7="/rectangle-8-1@2x.png"
        plumber="Cleaner"
        propHeight="225px"
      />
      <Plumber
        rectangle7="/rectangle-9@2x.png"
        plumber="Painter"
        propHeight="225px"
      />
      <Plumber
        rectangle7="/rectangle-10@2x.png"
        plumber="Home Appliance Repair"
        propHeight="225px"
      />
      <Plumber
        rectangle7="/rectangle-7-1@2x.png"
        plumber="Movers and Packers"
        propHeight="212px"
      />
      <Plumber
        rectangle7="/rectangle-6-1@2x.png"
        plumber="Dry Cleaning"
        propHeight="209px"
      />
    </div>
  );
};

export default CategoryItem;
