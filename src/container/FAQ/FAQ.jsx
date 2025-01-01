import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

import './FAQ.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questioaire = [
    {
      title: 'What is an Electric Car?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
    {
      title: 'How Do I Charge an Electric Car?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
    {
      title: 'What is the Range of an Electric Car?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
    {
      title: 'What Maintenance Do Electric Cars Require?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
    {
      title: 'How Long Do Electric Car Batteries Last?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
    {
      title: 'Can I Take Long Trips in an Electric Car?',
      answer:
        'An electric car is a vehicle powered by an electric motor instead of a traditional internal and best combustion engine. It uses electricity stored in batteries to drive the motor, producing zero emissions and offering a quieter, more efficient ride.',
    },
  ];

  return (
    <div className="faq__container">
      <div className="faq__header">
        <h2>Have Questions</h2>
        <p>
          Stay informed and inspired by joining our newsletter! Sign up today to
          receive the latest updates, exclusive content, and special offers
          straight to your inbox.
        </p>
      </div>

      <div className='faq__item-container'>
        {questioaire.map((item, index) => (
          <div key={index} className="faq__item">

            <div
              className="faq__item-question"
              onClick={() => handleToggle(index)}
            >
              <h4>{item.title}</h4>
              <div className='faq__icon'>
                {activeIndex === index ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
            </div>

            {activeIndex === index && <p className='faq__item-answer'>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
