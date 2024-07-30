import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">GLOWRA</div>
        <p className="tagline">Find Your Glow.</p>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Pages</h4>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/clinics">Clinics</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <a href="/quote">Get a Quote</a>
            <a href="/about">About Us</a>
          </div>
          <div className="footer-column social-media">
            <h4>In Social Media</h4>
            <div className="social-icons">
              {/* Add your social media icons here */}
              <a href="#" className="icon-whatsapp"></a>
              <a href="#" className="icon-threads"></a>
              <a href="#" className="icon-instagram"></a>
              <a href="#" className="icon-facebook"></a>
              <a href="#" className="icon-pinterest"></a>
            </div>
          </div>
        </div>
        <p className="copyright">All Rights reserved © GlowUp</p>
      </div>
    </footer>
  );
};

export default Footer;