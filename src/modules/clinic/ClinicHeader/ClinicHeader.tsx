import React from 'react';
import EditableImage from '../../../components/clinic/EditableImage/EditableImage';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './ClinicHeader.module.css';

interface ClinicHeaderProps {
  isEditing: boolean;
}

const ClinicHeader: React.FC<ClinicHeaderProps> = ({ isEditing }) => {
  return (
    <div className={styles.clinicHeader}>
      <div className={styles.logoAndInfo}>
        <EditableImage isEditing={isEditing} src='/images/clinic/ClinicPageProfilePic.png' alt="Clinic" className={styles.clinicLogo} />
        <div className={styles.clinicInfo}>
          <h1 className={styles.clinicName}>
            <EditableText isEditing={isEditing} defaultText="Bayside Cosmetics" />
          </h1>
          <p className={styles.clinicTagline}>
            <EditableText isEditing={isEditing} defaultText="The Best in Specialized Cosmetic Surgery" />
          </p>
          <div className={styles.clinicHours}>
            <span className={styles.openNow}>Open now</span>
            <span className={styles.closingTime}>• Close 8pm</span>
          </div>
        </div>
      </div>
      <div className={styles.clinicRating}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.reviewCount}>(4,039 reviews)</span>
      </div>
    </div>
  );
};

export default ClinicHeader;