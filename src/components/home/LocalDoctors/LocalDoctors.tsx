import React from 'react';
import DoctorCard from './DoctorCard';
import { Doctor } from '../../../utils/types';
import './LocalDoctors.css';

const LocalDoctors: React.FC = () => {
  const doctors: Doctor[] = [
    {
      name: "Dr. Alan Bain",
      title: "Primary Care Doctor",
      location: "Chicago, IL",
      rating: 4.17,
      reviewCount: 1039,
      review: "I recently visited Dr. Alan Bain for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...",
      availability: "Appointments Available Tomorrow",
      image: "/images/home/doctors/HomepageBookWithDoctors1.png"
    },
    {
      name: "Dr. Samantha Johnson",
      title: "Primary Care Doctor",
      location: "Chicago, IL",
      rating: 4.97,
      reviewCount: 1039,
      review: "I recently visited Dr. Samantha Johnson for a check-up and was thoroughly impressed. The staff was friendly and efficient, and...",
      availability: "Appointments Available Tomorrow",
      image: "/images/home/doctors/HomepageBookWithDoctors2.png"
    },
    {
      name: "Dr. Prathick Nair",
      title: "Eurologist, PHD",
      location: "Chicago, IL",
      rating: 6.9,
      reviewCount: 42069,
      review: "I recently visited Dr. Prathick Nair due to my issues with my relatively small penis. After the visit, it was 3 times the size! AMAZING!!",
      availability: "Next Appointments Available in 39 years",
      image: "/images/home/doctors/TikDocImage.png"
      //image: "/images/home/doctors/HomepageBookWithDoctors3.png"
    },
  ];

  return (
    <section className="local-doctors">
      <h2>Book with Local Doctors</h2>
      <h5>Top-rated primary care doctors with 90% of patients giving them 5-star ratings. Known for their exceptional service, attentive care, and medical expertise, they are highly recommeneded for outstanding medical care.</h5>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </section>
  );
};

export default LocalDoctors;