// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Store from './pages/store';
import Navbar from './navbar';
import SplashScreen from './splash';
import ImageCarousel from './carousel';
import GallerySection from './gallery';
import OurCodeSection from './about';
import Footer from './footer';
import PopularProductsSection from './popular';
import Contact from './pages/contact';

// Home Page component with splash logic
function HomeWithSplash() {
  const [splashDone, setSplashDone] = useState(() => {
    // Check if splash has already been shown in this session
    return sessionStorage.getItem('splashShown') === 'true';
  });

  useEffect(() => {
    if (!splashDone) {
      const timer = setTimeout(() => {
        setSplashDone(true);
        sessionStorage.setItem('splashShown', 'true');
      }, 2000); // Adjust splash time if needed
      return () => clearTimeout(timer);
    }
  }, [splashDone]);

  if (!splashDone) {
    return <SplashScreen onComplete={() => {}} />;
  }

  return (
    <>
      <Navbar />
      <ImageCarousel />
      <OurCodeSection />
      <GallerySection />
      <PopularProductsSection />
      <Footer />
    </>
  );
}

// Contact page – no splash
function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}




function App() {
  return (
    <Router basename="/liw_page/">
      <Routes>
        <Route path="/" element={<HomeWithSplash />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/store" element={<><Navbar /><Store /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
