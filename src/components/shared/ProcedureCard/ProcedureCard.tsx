import React from 'react';
import { Procedure } from '../../../utils/types';
import './ProcedureCard.css';

const ProcedureCard: React.FC<Procedure> = ({
  name,
  doctor,
  location,
  price,
  rating,
  image
}) => {
  return (
    <div className="procedure-card">
      <div className="procedure-image-container">
        <img src={image} alt={name} className="procedure-image" />
        <span className="procedure-rating">{rating.toFixed(1)} ⭐</span>
        <span className="review-snippet">Review Snippet</span>
      </div>
      <div className="procedure-info">
        <h3 className="procedure-name">{name}</h3>
        <p className="procedure-doctor">{doctor}</p>
        <p className="procedure-title">Board-Certified Dermatologist</p>
        <p className="procedure-location">{location}</p>
        <p className="procedure-price">Starting at ${price}</p>
      </div>
      <button className="view-button">View</button>
    </div>
  );
};

export default ProcedureCard;