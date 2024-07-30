import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">GLOWRA</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/list-clinic">List your clinic on Glowra</Link>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search Want you thing ..." />
          <button aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        <div className="auth-buttons">
          <button className="sign-up">Sign up</button>
          <button className="login">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;