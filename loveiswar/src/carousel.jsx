// src/ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import './carousel.css';

import img1 from './assets/carousel/img1.avif';
import img2 from './assets/carousel/img2.avif';
import img3 from './assets/carousel/img3.avif';

const images = [img1, img2, img3];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
    </div>
  );
}

export default ImageCarousel;
