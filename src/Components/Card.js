import React from 'react';
import Styles from './popularItems.module.css';


const Card = (props) => {
  const newItem = [
    { heading: 'other method' }
  ]
  return (
    <div className={`card ${Styles.card}`}>
      <img src={props.item.src} className={`card-img-top ${Styles.food_img}`} alt="image" />
      <div className="card-body">
        <h5 className="card-title">{newItem.heading}</h5>
        <p className="card-text">{props.item.description}</p>
        <p> {props.item.price}</p>
        <a href="" className="btn btn-primary">ADD</a>
      </div>
    </div>
  )
};

export default Card;