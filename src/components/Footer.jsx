import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo white">
              NextWave<span>.</span> Digital
            </div>
            <p className="footer-tagline">
              Empowering small businesses in Lahore with professional digital marketing since 2026.
            </p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              © 2026 NextWave Digital. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
