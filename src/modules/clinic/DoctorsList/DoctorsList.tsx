import React from 'react';
import EditableImage from '../../../components/clinic/EditableImage/EditableImage';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './DoctorsList.module.css';

interface Doctor {
  name: string;
  specialty: string;
  imageUrl: string;
}

interface DoctorsListProps {
  isEditing: boolean;
}

const DoctorsList: React.FC<DoctorsListProps> = ({ isEditing }) => {
  const [doctors, setDoctors] = React.useState<Doctor[]>([
    { name: 'Dr. Janet Lo', specialty: 'Dermatologist', imageUrl: '/images/home/doctors/HomePageBookWithDoctors2.png'},
    { name: 'Dr. Ligmab Als', specialty: 'Geologist', imageUrl: '/images/home/doctors/HomePageBookWithDoctors1.png' },
    { name: 'Dr. Joe Mama', specialty: 'Astrologist', imageUrl: '/images/home/doctors/HomePageBookWithDoctors3.png' },
    { name: 'Dr. Candice D. Fitinya', specialty: 'Scientologist', imageUrl: '/images/home/doctors/HomePageBookWithDoctors2.png' },
  ]);

  return (
    <div className={styles.doctorsList}>
      <h2 className={styles.listTitle}>Doctors who work at Bayside Cosmetics:</h2>
      <div className={styles.doctorsGrid}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.doctorCard}>
            <EditableImage isEditing={isEditing} src={doctor.imageUrl} alt={doctor.name} className={styles.doctorImage} />
            <div className={styles.doctorInfo}>
              <div className={styles.doctorName}>
                <EditableText isEditing={isEditing} defaultText={doctor.name} />
              </div>
              <div className={styles.doctorSpecialty}>
                <EditableText isEditing={isEditing} defaultText={doctor.specialty} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;