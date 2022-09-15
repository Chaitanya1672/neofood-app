import React from "react";
import Styles from './trendingPage.module.css';
import TrendingFood from '../static/images/TrendingFood.jpg'
import { BsFillStarFill, BsHeart, BsCart3 } from 'react-icons/bs';
import { data } from "../utils/data";

const TrendingPage = () => {
  return (
    <>
      <div className={`container`}>
        <div className={`mt-5 ${Styles.trending_food}`}>
          <h2 className={Styles.header}>Todays Trending Food</h2>
          <p className={Styles.header_text}>People loves it most the past week</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className={Styles.foodImg} src={TrendingFood} />
            <div className={`d-flex justify-content-center gap-5 ${Styles.img_options}`}>
              <img src={TrendingFood} width={80} height={90} />
              <img src={TrendingFood} width={80} height={90} />
              <img src={TrendingFood} width={80} height={90} />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-between ">
            <div className="d-flex flex-wrap">
              <h3 className={Styles.food_title}>{data?.recipe?.name}</h3>
              <h4 className={Styles.favfood_price}> $ 1,050</h4>
              <div className={Styles.rating_icons}>
                <span className={`mx-1 ${Styles.icons}`}><BsFillStarFill size={36} /></span>
                <span className={`mx-1 ${Styles.icons}`}><BsFillStarFill size={36} /></span>
                <span className={`mx-1 ${Styles.icons}`}><BsFillStarFill size={36} /></span>
                <span className={`mx-1 ${Styles.icons}`}><BsFillStarFill size={36} /></span>
                <span className={`mx-1 ${Styles.icons}`}><BsFillStarFill size={36} /></span>
                <span className={`mx-4 ${Styles.review}`}>5.0 out of (1256) <a href="#" className={Styles.review_link}>Reviews</a></span>
              </div>
            </div>
            {/* <div className={Styles.quanitity_handler}> */}
            <div className='d-flex flex-column '>
              <div >
                <h4>Select Quantity</h4>
              </div>
              <div>
                <button className={Styles.qty_btn}>0.5</button>
                <button className={Styles.qty_btn}>2</button>
                <button className={Styles.qty_btn}>5</button>
                <button className={Styles.qty_btn}>10</button>
                <button className={Styles.qty_btn}>20</button>
                <button className={Styles.qty_btn}>30</button>
              </div>
              <div>
                <button className={Styles.like_btn}><BsHeart color="red" size={26} /></button>
                <button className={Styles.like_btn}><BsCart3 color="yellow" size={26} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendingPage;