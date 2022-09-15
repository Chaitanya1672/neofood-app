import React from 'react';
import Styles from './contact.module.css';

const ContactUs = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <h2>Contact Us </h2>
              <p>Need an experienced and skilled hand with custom IT projects?<br />
                Fill out the form to get a free consultation</p>
            </div>
            <div>
              <input
                className={Styles.inputSize} type="text"
                placeholder="Your Company Name" />
              <input
                className={Styles.inputSize} type="text"
                placeholder="Nature of Buisnesses" />
              <input
                className={Styles.address} type="text"
                placeholder="Adress" />
              <input
                className={Styles.pincode} type="text"
                placeholder="Postcode" />
              <input
                className={Styles.inputSize} type="text"
                placeholder="Contact Name" />
              <input
                className={Styles.inputSize} type="text"
                placeholder="Contact Phone" />
            </div>
          </div>
          <div className='col-md-6 d-flex flex-column align-items-center' >
            <div className={Styles.office_text}>
              <p className={Styles.title}>Offices</p>
              <span>United States</span><br />
              <span>500 5th Avenue Suite 400, NY 10110</span><br />
              <span>United Kingdom</span><br />
              <span>High St. Bromley BR1 1DN</span><br />
              <span>France</span><br />
              <span>80 avenue des terrois de France, Paris </span>
            </div>
            <iframe
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2380496795!2d73.00665461444011!3d19.141054387050595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0a71abdbccf%3A0x211c40a176ee4540!2sNeoSOFT!5e0!3m2!1sen!2sin!4v1663225380642!5m2!1sen!2sin"}
              width="400"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={""}
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactUs;