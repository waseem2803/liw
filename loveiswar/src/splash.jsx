// src/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import './splash.css';
import bgImage from './assets/love_is_war_butterfly.png'; // Your background image
import overlayImage from './assets/love_f.png'; // Your overlay image

function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Hide splash screen after 2.5s
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="image-stack">
        <img src={bgImage} alt="Background" className="bg-img" />
        <img src={overlayImage} alt="Overlay" className="overlay-img" />
      </div>
    </div>
  );
}

export default SplashScreen;
