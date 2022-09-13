import React from 'react';
import TrendingFood from '../static/images/TrendingFood.jpg';
import Styles from './popularItems.module.css';


const Card = () => {
  const cardItems = [
    { title: 'hello', description: 'hello', price: 1200 }
  ]
  return (
    <div className={`card ${Styles.card}`}>
      <img src={TrendingFood} className={`card-img-top ${Styles.food_img}`} alt="image" />
      <div className="card-body">
        <h5 className="card-title">{cardItems.title}</h5>
        <p className="card-text">{cardItems.description}</p>
        <p> {`$${cardItems.price}`}</p>
        <a href="#" className="btn btn-primary">{''}</a>
      </div>
    </div>
  )
};

export default Card;