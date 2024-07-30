// src/modules/clinic/Reviews/Reviews.tsx
import React from 'react';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import EditableImage from '../../../components/clinic/EditableImage/EditableImage';
import styles from './Reviews.module.css';

interface Review {
  authorName: string;
  authorImage: string;
  rating: number;
  content: string;
}

interface ReviewsProps {
  isEditing: boolean;
}

const Reviews: React.FC<ReviewsProps> = ({ isEditing }) => {
  const [reviews, setReviews] = React.useState<Review[]>([
    {
      authorName: 'Samantha Johnson',
      authorImage: '/images/home/doctors/HomePageBookWithDoctors1.png',
      rating: 5,
      content: 'I recently visited Dr. Samantha Johnson for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...'
    },
    {
      authorName: 'Samantha Johnson',
      authorImage: '/images/home/doctors/HomePageBookWithDoctors2.png',
      rating: 5,
      content: 'I recently visited Dr. Samantha Johnson for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...'
    },
    {
      authorName: 'Samantha Johnson',
      authorImage: '/images/home/doctors/HomePageBookWithDoctors3.png',
      rating: 5,
      content: 'I recently visited Dr. Samantha Johnson for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...'
    },
    {
      authorName: 'Samantha Johnson',
      authorImage: '/images/home/doctors/HomePageBookWithDoctors1.png',
      rating: 5,
      content: 'I recently visited Dr. Samantha Johnson for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...'
    },
  ]);

  return (
    <div className={styles.reviews}>
      <h2>Reviews for Bayside Cosmetics</h2>
      <div className={styles.reviewGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <EditableImage isEditing={isEditing} src={review.authorImage} alt={review.authorName} />
            <EditableText isEditing={isEditing} defaultText={review.authorName} />
            <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
            <EditableText isEditing={isEditing} defaultText={review.content} />
            <button className={styles.readMore}>Read</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;