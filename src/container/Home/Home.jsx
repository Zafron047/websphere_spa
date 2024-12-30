import React from 'react';

import './Home.scss';
import { images } from '../../constants';

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__container-content">
        <h1>Elevating UX Transformation with</h1>
        <h1 className="home__container-gradient-header">Business Solutions</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from making it over
          2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia.
        </p>
        <button className="content-button">Contact Us</button>
      </div>

      <ul className="Home__container-achievements">
        <li id="achievement_card-1" className="achievement-card">
          <div className="platform-logo">
            <img src={images.behance} alt="behance" />
          </div>
          <h2>Featured on Behance</h2>
        </li>
        <li id="achievement_card-2" className="achievement-card">
          <div className="platform-logo">
            <img src={images.clutch} alt="clutch" />
          </div>
          <h2>5 Star Review on Clutch</h2>
        </li>
        <li id="achievement_card-3" className="achievement-card">
          <div className="platform-logo">
            <img src={images.manifest} alt="manifest" />
          </div>
          <h2>Awarded by The Manifest</h2>
        </li>
      </ul>
    </div>
  );
};

export default Home;
