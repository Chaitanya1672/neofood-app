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
                class={Styles.inputSize} type="text"
                placeholder="Your Company Name" />
              <input
                class={Styles.inputSize} type="text"
                placeholder="Nature of Buisnesses" />
              <input
                class={Styles.address} type="text"
                placeholder="Adress" />
              <input
                class={Styles.pincode} type="text"
                placeholder="Postcode" />
              <input
                class={Styles.inputSize} type="text"
                placeholder="Contact Name" />
              <input
                class={Styles.inputSize} type="text"
                placeholder="Contact Phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactUs;