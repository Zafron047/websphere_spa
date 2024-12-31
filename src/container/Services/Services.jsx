import React, { useState } from 'react';

import './Services.scss';
import images from '../../constants/images';

const serviceData = [
  {
    title: 'UI/UX Design',
    description:
      "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our journey that builds trust UX design agency.",
    image: images.ui_ux,
  },
  {
    title: 'Social Media Management',
    description:
      'Description for Social Media Management. Description for Social Media Management. Description for Social Media Management. Description for Social Media Management. Description for Social Media Management. Description for Social Media Management.',
    image: images.ui_ux,
  },
  {
    title: 'Web App Development',
    description: 'Description for Web App Development. Description for Web App Development. Description for Web App Development. Description for Web App Development. Description for Web App Development. Description for Web App Development.',
    image: images.ui_ux,
  },
  {
    title: 'Web Design',
    description: 'Description for Web Design. Description for Web Design. Description for Web Design. Description for Web Design. Description for Web Design. Description for Web Design. Description for Web Design. Description for Web Design.',
    image: images.ui_ux,
  },
  {
    title: 'SEO Services',
    description: 'Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. Description for SEO Services. ',
    image: images.ui_ux,
  },
  {
    title: 'Content Creation and Management',
    description: 'Description for Content Creation and Management. Description for Content Creation and Management. Description for Content Creation and Management. Description for Content Creation and Management. Description for Content Creation and Management. ',
    image: images.ui_ux,
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item
  };

  return (
    <div className="services__section">
      <h2>Services we offer</h2>
      <ul>
        {serviceData.map((service, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            <hr />
            <div className="service__title">
              <h3 className="service-serial">{index + 1}</h3>
              <h3 className="service__header">{service.title}</h3>
            </div>
            {openIndex === index && (
              <div className="service__details-container">
                <div className="service__details">
                  <p>{service.description}</p>
                  <button className="app__button">Learn More</button>
                </div>
                <img src={service.image} alt={service.title} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
