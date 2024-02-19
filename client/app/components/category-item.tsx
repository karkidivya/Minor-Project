import type { NextPage } from "next";
import Plumber from "./plumber";
import styles from "./category-item.module.css";

const CategoryItem: NextPage = () => {
  return (
    <div className={styles.categoryItem}>
      <Plumber 
        image = "/rectangle-6@2x.png" 
        categoryName = "Electrician" 
        propHeight="225px"
      />
      <Plumber image="/rectangle-7@2x.png"
        categoryName="Plumber" 
        propHeight = "225px" 
      />
      <Plumber
        image="/rectangle-8@2x.png"
        categoryName="Carpenter"
        propHeight="225px"
      />
      <Plumber
        image="/rectangle-8-1@2x.png"
        categoryName="Cleaner"
        propHeight="225px"
      />
      <Plumber
        image="/rectangle-9@2x.png"
        categoryName="Painter"
        propHeight="225px"
      />
      <Plumber
        image="/rectangle-10@2x.png"
        categoryName="Home Appliance Repair"
        propHeight="225px"
      />
      <Plumber
        image="/rectangle-7-1@2x.png"
        categoryName="Movers and Packers"
        propHeight="212px"
      />
      <Plumber
        image="/rectangle-6-1@2x.png"
        categoryName="Dry Cleaning"
        propHeight="209px"
      />
    </div>
  );
};

export default CategoryItem;
