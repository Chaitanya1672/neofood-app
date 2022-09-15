import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import BannerImage from '../static/images/BannerImage.png'
import Styles from './banner.module.css'
import { BsFillStarFill } from 'react-icons/bs';

const Banner = () => {
  return (
    <>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-6'>
            <div className='row mt-5'>
              <div className='col-md-6'>
                <span className={Styles.banner_fast}>Fast</span>
              </div>
              <div className='col-md-6'>
                <span className={Styles.banner_food}>Food Delivery</span>
              </div>
            </div>
            <span className={Styles.banner_text}>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
              doloremque laudantium
            </span>
            <div className='row mt-4'>
              <div className='col'>
                <button type='button' className={Styles.orderNow}>
                  <span className={Styles.orderNowText}>Order Now</span>
                </button>
              </div>
              <div className='col'>
                <button type='button' className={Styles.watchVideo}>
                  <span className={Styles.videoIcon}><BsFillPlayFill /></span>
                  <span className={Styles.watchVideoText}>Watch Video</span>
                </button>
              </div>
            </div>
            <div className={`mt-4   ${Styles.star}`}>
              <span className='mx-1'><BsFillStarFill /></span>
              <span className='mx-1'><BsFillStarFill /></span>
              <span className='mx-1'><BsFillStarFill /></span>
              <span className='mx-1'><BsFillStarFill /></span>
              <span className='mx-1'><BsFillStarFill /></span>
            </div>
            <div className={`${Styles.starRating}`}>
              <div className={Styles.starIconText}>
                5 Star rating
              </div>
              <div className={Styles.reviewNo}>
                based on 1788 reviews
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={BannerImage} className={Styles.bannerImg} />
          </div>
        </div>
      </div>
    </>
  )
};

export default Banner;