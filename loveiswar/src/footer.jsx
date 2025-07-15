import React from 'react';
import './footer.css';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Footer() {
    const navigate = useNavigate();
  return (
    <footer className="footer">
      <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Love Is War. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
