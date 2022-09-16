import React from "react";
import Shape from '../static/images/Shape.png';
import Styles from './footer.module.css';
import twitter from '../static/images/twitter.png'
import { BsArrowRight, BsFacebook, TbBrandTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={`container ${Styles.footer}`}>
      <div className={Styles.imgDiv}>
        <div className={Styles.img}>
          <img src={Shape} />
        </div>
      </div>
      <div className={Styles.textDiv}>
        <div className={Styles.text}>
          <div className={Styles.part1}>
            Subscribe to our <br />newsletter
          </div>
          <input className={Styles.footerInput} type='email' placeholder='Email address' />
          <button type="submit" className={Styles.inputBtn} ><BsArrowRight /></button>
        </div>
        <div>
          <ul className={`mb-2 ${Styles.part2}`}>
            <li className={Styles.header}>Services</li>
            <li>Email Marketing</li>
            <li>Camliaigns</li>
            <li>Brandin  </li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <ul className={Styles.part2}>
            <li className={Styles.header}>About</li>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul className={Styles.part2}>
            <li className={Styles.header}>Help</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className={Styles.footerEnd}>
        <div className={Styles.footerEndText}>
          <span>
            Terms & Conditions
          </span>
          <span className={Styles.privacyText}>
            Privacy Policy
          </span>
        </div>
        <div >
          <span><BsFacebook /></span>
          <span className='mx-4'><img src={twitter} /></span>
          <span><BsInstagram /></span>
        </div>
      </div>
    </div >
  )
};

export default Footer;