import React from 'react';
import './Home.scss';

const Home = () => {
  return (
      <div className='home__container'>
        <div className="home__container-content">
          <h1>Elevating UX Transformation with</h1>
          <h1 className="home__container-gradient-header">Business Solutions</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from making it over
            2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia.
          </p>
          <button className="home__container-button">Contact Us</button>
        </div>
      </div>
  );
};

export default Home;
