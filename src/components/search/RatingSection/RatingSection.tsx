import React from 'react';
import './RatingSection.css';

interface RatingSectionProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const RatingSection: React.FC<RatingSectionProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="rating-section">
      <h3>Customer Rating</h3>
      <div className="rating-options">
        {[5, 4, 3, 2, 1].map((value) => (
          <label key={value} className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value={value} 
              checked={rating === value} 
              onChange={() => onRatingChange(value)} 
            />
            <span>{value} Star {value < 5 ? '(& Above)' : ''}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;