import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{backgroundImage: "url('/images/home/HomepageMainPic.png')"}}>
      <h1>Discover & Book Your Next Cosmetic Procedure</h1>
      <p className="top-p">Find the Right Procedure: Explore options, compare doctors & clinics, book your consultation - all in one place.</p>
      <div className="search-form">
        <select defaultValue="Procedure Type">
          <option value="Procedure Type">Procedure Type</option>
          {/* Add more options */}
        </select>
        <select defaultValue="Australia">
          <option value="Australia">Australia</option>
          <option value="USA">USA</option>
          <option value="Europe">Europe</option>
          {/* Add more options */}
        </select>
        <select defaultValue="Up $3500">
          <option value="Up $3500">Up $3500</option>
          <option value="$2000-3500">$2500-$3500</option>
          <option value="Under $2000">Under $2000</option>

          {/* Add more options */}
        </select>
        <button className="search-button">Search</button>
      </div>
      <p className="search-hint">Search by Condition, Select Locations, or Category. <a href="#">Learn More</a></p>
    </section>
  );
};

export default Hero;