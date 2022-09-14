import React from "react";
import Styles from './popularItems.module.css';
import Card from "./Card";
import TrendingFood from '../static/images/TrendingFood.jpg';

const PopularItems = () => {
  const cardItems = [
    { title: 'hello', description: 'hello', price: '$1200', src: TrendingFood },
    { title: 'second text', description: 'this is null', price: '$1300', src: TrendingFood },
    { title: 'second text', description: 'this is null', price: '$1300', src: TrendingFood },
    { title: 'second text', description: 'this is null', price: '$1300', src: TrendingFood },
    { title: 'second text', description: 'this is null', price: '$1300', src: TrendingFood }
  ]
  return (
    <>
      <div className="container mt-5">
        <h2 className={Styles.header}>Popular Items</h2>
        <p className={Styles.para}>Most ordered Items</p>
        <span className="d-flex flex-wrap gap-4">
          {cardItems.map((item) => (
            <Card item={item} />

          ))}
        </span>
      </div>
    </>
  )
};

export default PopularItems;