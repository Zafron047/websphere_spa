import React from 'react';
import { BsTelephoneInboundFill } from 'react-icons/bs';

import images from '../../constants/images';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact-first">
        <p>Got a project in mind?</p>
        <h2>Let’s discuss the <br/>details</h2>
        <button
          // className="app__button"
          style={{ color: 'white', background: '#030307', width: '150px', height: '50px', fontSize: '0.75rem' }}
        >
          Contact Us
        </button>
      </div>
      <div className="contact-last">
        <img src={images.person} alt="profile pic" />
        <p>
          Stay informed and inspi by joining our newsletter! Sign up today to
          receive ux design the.
        </p>
        <button className="app__button">
          Ask Question <BsTelephoneInboundFill className="telephone" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
