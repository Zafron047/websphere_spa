import React from 'react';

import './Navbar.scss';
import { images } from '../constants';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={images.agency_logo} />
        <div className="logo-text">
          <p>Web</p>
          <span>Sphere</span>
        </div>
      </div>
      <div className={`nav-links-container ${() => {}}`}>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Work Samples</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <button className="nav__button">Hire Us</button>
      <button className="menu-toggle" onClick={() => {}}>
        ☰
      </button>
    </div>
  );
};

export default Navbar;
