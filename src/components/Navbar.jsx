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
        <button className="nav__button">Hire Us</button>
      </div>
      <button className="menu-toggle" onClick={() => {}}>
        ☰
      </button>
    </div>
  );
};

export default Navbar;
