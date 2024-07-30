import React, { useState } from 'react';
import ClinicHeader from '../../modules/clinic/ClinicHeader/ClinicHeader';
import DoctorsList from '../../modules/clinic/DoctorsList/DoctorsList';
import ProceduresSection from '../../modules/clinic/ProceduresSection/ProceduresSection';
import SpecialOffers from '../../modules/clinic/SpecialOffers/SpecialOffers';
import Highlights from '../../modules/clinic/Highlights/Highlights';
import Reviews from '../../modules/clinic/Reviews/Reviews';
import Location from '../../modules/clinic/Location/Location';
import InstagramPosts from '../../modules/clinic/InstagramPosts/InstagramPosts';
import EditModeToggle from '../../components/clinic/EditModeToggle/EditModeToggle';
import ConsultationForm from '../../components/clinic/ConsultationForm/ConsultationForm';
import './ClinicPage.css';

const ClinicPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="clinic-page">
      <EditModeToggle isEditing={isEditing} onToggle={toggleEditMode} />
      <div className="two-column-layout">
        <div className="left-column">
          <ClinicHeader isEditing={isEditing} />
          <DoctorsList isEditing={isEditing} />
          <ProceduresSection isEditing={isEditing} />
          <SpecialOffers isEditing={isEditing} />
          <Highlights isEditing={isEditing} />
          <Reviews isEditing={isEditing} />
          <Location isEditing={isEditing} />
          <InstagramPosts isEditing={isEditing} />
        </div>
        <div className="right-column">
          <ConsultationForm isEditing={isEditing} />
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;