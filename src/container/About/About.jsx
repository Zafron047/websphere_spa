import React from 'react';

import './About.scss';
import images from '../../constants/images';
const About = () => {
  return (
    <div className="about__container">
      <div className="about__description-container">
        <div className="desc__text-container">
          <h2>Websphere Tech About Us</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage,
          </p>
          <button className="app__button">Learn More</button>
        </div>

        <div className="desc__img-container">
          <div className="img-wrapper">
            <img src={images.about_office} alt='description'/>
          </div>

          <div className="img-wrapper">
            <img src={images.diversity_zoom} alt='description'/>
          </div>
        </div>
      </div>

      <div className="about__logo-container">
        <img src={images.adidas} alt='partner logo'/>
        <img src={images.american_apparel} alt='partner logo'/>
        <img src={images.adidas} alt='partner logo'/>
        <img src={images.nike} alt='partner logo'/>
        <img src={images.adidas} alt='partner logo'/>
        <img src={images.american_apparel} alt='partner logo'/>
        <img src={images.google} alt='partner logo'/>
        <img src={images.american_apparel} alt='partner logo'/>
        <img src={images.nike} alt='partner logo'/>
      </div>

      <div className="about__video-container">
        <iframe
          className='video__container-iframe'
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7e90gBu4pas"
          title="YouTube video player"
          frameBorder="20"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
