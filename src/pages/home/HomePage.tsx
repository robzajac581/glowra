import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import LocalDoctors from '../../components/home/LocalDoctors/LocalDoctors';
import CosmeticProcedures from '../../components/home/CosmeticProcedures/CosmeticProcedures';
import WhyGlowra from '../../components/home/WhyGlowra/WhyGlowra';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <LocalDoctors />
      <CosmeticProcedures />
      <WhyGlowra />
    </div>
  );
};

export default HomePage;