import React, { useState, useEffect } from 'react';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './SpecialOffers.module.css';

interface Offer {
  procedure: string;
  originalPrice: number;
  discountedPrice: number;
}

interface SpecialOffersProps {
  isEditing: boolean;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ isEditing }) => {
  const [offers, setOffers] = useState<Offer[]>([
    { procedure: 'Botox', originalPrice: 339.99, discountedPrice: 240.00 },
    { procedure: 'Rhinoplasty', originalPrice: 2500.00, discountedPrice: 2350.00 },
  ]);

  const [timeLeft, setTimeLeft] = useState('4h & 59 minutes');

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the countdown timer logic here
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.specialOffers}>
      <h3>Special Offers</h3>
      <p className={styles.endTime}>
        Ends in: <EditableText isEditing={isEditing} defaultText={timeLeft} />
      </p>
      {offers.map((offer, index) => (
        <div key={index} className={styles.offer}>
          <EditableText isEditing={isEditing} defaultText={offer.procedure} />
          <span className={styles.price}>
            <EditableText isEditing={isEditing} defaultText={`$${offer.originalPrice.toFixed(2)}`} className={styles.originalPrice}/>
            <EditableText isEditing={isEditing} defaultText={`-$${(offer.originalPrice - offer.discountedPrice).toFixed(2)}`} className={styles.discountedPrice} />
          </span>
          <button className={styles.addOffer}>+ Add</button>
        </div>
      ))}
    </div>
  );
};

export default SpecialOffers;