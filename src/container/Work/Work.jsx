import React from 'react';
import { LuCircleArrowOutUpRight } from "react-icons/lu";

import './Work.scss';
import images from '../../constants/images';

const Work = () => {
  const workData = [
    {
      id: 1,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
    {
      id: 2,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
    {
      id: 3,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
    {
      id: 4,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
    {
      id: 5,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
    {
      id: 6,
      title: 'Website Design',
      text: "Exceptional UX isn't just design; it's a journey that builds trust, forges loyalty, and makes your brand unforgettable, and this is our commitment to you from our journey that builds trust UX design agency.",
      imgUrl: images.design,
      icon: <LuCircleArrowOutUpRight />,
      link: 'link',
    },
  ];

  return (
    <div className="work__container">
      <div className="work__header">
        <h2>Work Samples</h2>
        <div className="work__header__text">
          <p>
            Exceptional UX isn't just design; it's a journey that builds trust,
            forges loyalty, and makes your brand unforgettable and this is our
            commitment to you from our journey that builds trust UX design
            agency.
          </p>
          <button className="app__button">View All</button>
        </div>
      </div>
      <div className="work__cards-container">
        <ul>
          {workData.map((work) => (
            <li className="work__card" key={work.id}>
              <a href={work.link}>
                <img src={work.imgUrl} alt="work type" />
                <div className='card__header'>
                  <h4 className="card__title">{work.title}</h4>
                  <div className='work__icon'>{work.icon}</div>
                </div>
                <p>{ work.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
