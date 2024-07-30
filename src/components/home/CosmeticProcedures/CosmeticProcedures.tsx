import React from 'react';
import ProcedureCard from '../../shared/ProcedureCard/ProcedureCard';
import { Procedure } from '../../../utils/types';
import './CosmeticProcedures.css';

const CosmeticProcedures: React.FC = () => {
  const procedures: Procedure[] = [
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc1.png"
    },
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc2.png"
    },
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc3.png"
    },
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc4.png"
    },
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc5.png"
    },
    {
      name: "Botox Cosmetic RTASCX (Wrinkle Reduction)",
      doctor: "Dr. Jane Smith",
      location: "Midtown Manhattan, New York",
      price: 800,
      rating: 4.8,
      image: "/images/home/procedures/HomePageFindYourProc6.png"
    },
  ];

  // TODO: add more options
  return (
    <section className="cosmetic-procedures">
      <h2>Find Your Cosmetic Procedure</h2>
      <div className="search-form">
        <input type="text" placeholder="Type the procedure you want here" />
        <select defaultValue="Botox">
          <option value="Botox">Botox</option>
          {/* Add more options */}
        </select>
        <select defaultValue="Australia">
          <option value="Australia">Australia</option>
          {/* Add more options */}
        </select>
        <select defaultValue="+ $3500">
          <option value="+ $3500">+ $3500</option>
          {/* Add more options */}
        </select>
        <select defaultValue="Surgeon">
          <option value="Surgeon">Surgeon</option>
          {/* Add more options */}
        </select>
        <button className="see-all">See All</button>
      </div>
      <div className="procedure-list">
        {procedures.map((procedure, index) => (
          <ProcedureCard key={index} {...procedure} />
        ))}
      </div>
      <button className="start-search">Start Your Search</button>
    </section>
  );
};

export default CosmeticProcedures;