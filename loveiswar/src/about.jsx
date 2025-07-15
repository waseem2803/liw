import React, { useState } from 'react';
import './about.css';

const topics = [
  {
    title: 'Individuality',
    brief: 'You do you.',
    full: 'We believe in identity over trends. Our clothes are made to express, not impress.',
  },
  {
    title: 'Sustainability',
    brief: 'Wear with purpose.',
    full: 'We source responsibly and avoid waste. Every thread matters.',
  },
  {
    title: 'Rebellion',
    brief: 'Break the norms.',
    full: 'We challenge mainstream fashion with designs that stand out — unapologetically.',
  }
];

function OurCodeSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="our-code-section">
      <p className="our-code-title">Our Code</p>
      <div className="our-code-grid">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className={`our-code-card ${activeIndex === idx ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => toggleActive(idx)} // For mobile
          >
            <p style={{fontSize:'2rem'}}>{topic.title}</p>
            <p>{activeIndex === idx ? topic.full : topic.brief}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCodeSection;
