import React from 'react';
import './AccountPage.css';

interface AccountPageProps {
  username?: string;
  recoveryEmail?: string;
  clinicName?: string;
  clinicLocation?: string;
}

const AccountPage: React.FC<AccountPageProps> = ({ username='', recoveryEmail='', clinicName='', clinicLocation='' }) => {
  return (
    <div className="account-page">
      <h1>My Account</h1>
      
      <section className="security">
        <h2>Security</h2>
        <div className="field">
          <label>Username</label>
          <span>{username}</span>
        </div>
        <div className="field">
          <label>Password</label>
          <span>••••••••</span>
        </div>
        <div className="field">
          <label>Recovery email</label>
          <span>{recoveryEmail}</span>
        </div>
        <button className="reset-password">Reset my password</button>
      </section>

      <section className="customer-service">
        <h2>Customer service</h2>
        <p>At Glowra we value your experience. Our team is always available to answer any questions you may have.</p>
        <button className="contact-us">Contact us</button>
      </section>

      <section className="clinicians">
        <h2>For Clinicians</h2>
        <div className="clinic-info">
          <img src="/path-to-clinic-image.jpg" alt="Clinic" className="clinic-image" />
          <div>
            <h3>{clinicName}</h3>
            <p>{clinicLocation}</p>
          </div>
        </div>
        <div className="clinic-actions">
          <button className="claim-clinic">Claim another clinic</button>
          <button className="delist-clinic">Delist my clinic</button>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;

// TODO: Add functionality to buttons and form submission
// TODO: Implement state management for user data
// TODO: Add error handling and form validation