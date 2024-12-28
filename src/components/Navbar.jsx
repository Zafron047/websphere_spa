import React from 'react';
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src="https://www.ironhack.com/assets/shared/logo.svg" />
        <div className="logo-text">
          <p>Web</p>
          <span>Sphere</span>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Work Samples</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
      <button className="nav__button">Hire Us</button>
    </div>
  );
};

export default Navbar;
