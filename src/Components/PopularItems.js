import React from "react";
import Styles from './popularItems.module.css';
import Card from "./Card";

const PopularItems = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className={Styles.header}>Popular Items</h2>
        <p className={Styles.para}>Most ordered Items</p>
        <div>
          <Card />
        </div>
      </div>
    </>
  )
};

export default PopularItems;