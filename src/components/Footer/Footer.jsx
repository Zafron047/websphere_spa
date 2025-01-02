import React, { useState } from 'react';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io5';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoBehance } from 'react-icons/io5';
import { AiFillMediumCircle } from 'react-icons/ai';

import './Footer.scss';

const Footer = () => {
  const [activeContent, setActiveContent] = useState('webSphere');

  const handleClick = (target) => {
    setActiveContent(target === activeContent ? '' : target);
  };

  return (
    <div className="footer__container">
      <div className="footer__column-container">
        <div className="footer__column">
          <h4>WebSphere</h4>
          <p>
            Stay informed and inspired by joining our newsletter! Sign up today
            to receive the latest updates,
          </p>
        </div>

        <div className="footer__column">
          <h4>Company</h4>
          <p>About</p>
          <p>Services</p>
          <p>Work</p>
          <p>Contact</p>
        </div>

        <div className="footer__column">
          <h4>Services</h4>
          <p>UI/UX Design</p>
          <p>Web Design</p>
          <p>Developer</p>
          <p>SCO Content</p>
        </div>

        <div className="footer__column">
          <h4>Contact Us</h4>
          <p>
            <IoIosMail /> support@websphere.com
          </p>
          <p>
            <BsTelephoneInboundFill /> +001732-234759
          </p>
        </div>
      </div>

      <div className="footer__responsive-container">
        <div className="footer__clickable-header">
          <h4 onClick={() => handleClick('webSphere')}>WebSphere</h4>
          <h4 onClick={() => handleClick('company')}>Company</h4>
          <h4 onClick={() => handleClick('services')}>Services</h4>
          <h4 onClick={() => handleClick('contact')}>Contact Us</h4>
        </div>
        <div className="footer__content-column">
          <div
            className={activeContent === 'webSphere' ? 'active' : ''}
            id="webSphere"
          >
            <p>
              Stay informed and inspired by joining our newsletter! Sign up
              today to receive the latest updates,
            </p>
          </div>
          <div
            className={activeContent === 'company' ? 'active' : ''}
            id="company"
          >
            <p>About</p>
            <p>Services</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
          <div
            className={activeContent === 'services' ? 'active' : ''}
            id="services"
          >
            <p>UI/UX Design</p>
            <p>Web Design</p>
            <p>Developer</p>
            <p>SCO Content</p>
          </div>
          <div
            className={activeContent === 'contact' ? 'active' : ''}
            id="contact"
          >
            <p>
              <IoIosMail /> support@websphere.com
            </p>
            <p>
              <BsTelephoneInboundFill /> +001732-234759
            </p>
          </div>
        </div>
      </div>

      <div className="footer__row-container">
        <p>©2024 Websphere All Rights Reserved.</p>
        <div className="row__icon-container">
          <a href="https://www.angellist.com/">
            <AiFillMediumCircle className="icon" />
          </a>
          <a href="https://www.behance.net/">
            <IoLogoBehance className="icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare className="icon" />
          </a>
          <a href="https://www.linkedin.com/">
            <TiSocialLinkedinCircular className="icon" />
          </a>
          <a href="https://www.facebook.com/">
            <IoLogoFacebook className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
