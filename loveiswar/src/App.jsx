// App.jsx
import React from 'react';
import Navbar from './navbar';
import SplashScreen from './splash';
import ImageCarousel from './carousel';
import GallerySection from './gallery';
import { useState } from 'react';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone ? (
        <SplashScreen onComplete={() => setSplashDone(true)} />
      ) : (
        <>
          <Navbar />
          <ImageCarousel />
          <GallerySection/>
        </>
      )}
    </>
  );
}

export default App;
