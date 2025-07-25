import React, { useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.svg'; // Adjust the path as necessary

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/">HOME</a></li>
          <li><a href="/store">SHOP</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
