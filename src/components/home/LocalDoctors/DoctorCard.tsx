import React from 'react';
import { Doctor } from '../../../utils/types';
import './DoctorCard.css';

const DoctorCard: React.FC<Doctor> = ({
  name,
  title,
  location,
  rating,
  reviewCount,
  review,
  availability,
  image
}) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} className="doctor-image" />
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-title">{title}</p>
        <p className="doctor-location">{location}</p>
        <div className="doctor-rating">
          <span className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? "star filled" : "star"}>
                ★
              </span>
            ))}
          </span>
          <span className="rating-score">{rating.toFixed(1)}</span>
          <span className="review-count">({reviewCount} reviews)</span>
        </div>
        <p className="doctor-review">{review}</p>
        <p className="doctor-availability">{availability}</p>
        <button className="consultation-button">Request a Consultation</button>
      </div>
    </div>
  );
};

export default DoctorCard;