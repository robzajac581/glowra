import React from 'react';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './Location.module.css';

interface LocationProps {
  isEditing: boolean;
}

const Location: React.FC<LocationProps> = ({ isEditing }) => {
  const [address, setAddress] = React.useState('615 29th Avenue North, Myrtle Beach, SC 29577');

  return (
    <div className={styles.location}>
      <h2>Location</h2>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.460467141817!2d-78.87660468479258!3d33.90298798064546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068446adf6cc3%3A0x5b40b4f8a7e55a6b!2s615%2029th%20Ave%20N%2C%20Myrtle%20Beach%2C%20SC%2029577%2C%20USA!5e0!3m2!1sen!2s!4v1626884935180!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.addressContainer}>
        <EditableText isEditing={isEditing} defaultText={address} />
      </div>
    </div>
  );
};

export default Location;