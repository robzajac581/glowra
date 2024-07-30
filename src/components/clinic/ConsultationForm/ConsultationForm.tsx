import React, { useState } from 'react';
import './ConsultationForm.css';

interface ConsultationFormProps {
  isEditing: boolean;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ isEditing }) => {
  const [isNewPatient, setIsNewPatient] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [procedureType, setProcedureType] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { isNewPatient, name, email, procedureType, notes });
  };

  return (
    <div className="consultation-form">
      <h2 className="form-title">Request a consultation</h2>
      <div className="patient-type">
        <button 
          className={`patient-type-btn ${isNewPatient ? 'active' : ''}`}
          onClick={() => setIsNewPatient(true)}
        >
          New patient
        </button>
        <button 
          className={`patient-type-btn ${!isNewPatient ? 'active' : ''}`}
          onClick={() => setIsNewPatient(false)}
        >
          Returning patient
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="procedureType">Procedure Type</label>
          <select
            id="procedureType"
            value={procedureType}
            onChange={(e) => setProcedureType(e.target.value)}
            required
          >
            <option value="">Select a procedure</option>
            <option value="botox">Botox</option>
            <option value="filler">Filler</option>
            <option value="breastAugmentation">Breast Augmentation</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional info for the provider"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Request a consultation</button>
      </form>
      <div className="cost-estimate">
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Botox</td>
              <td>~$600</td>
            </tr>
            <tr>
              <td>Filler</td>
              <td>~$600</td>
            </tr>
            <tr>
              <td>Breast augmentation</td>
              <td>~$600</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Cost Estimate:</td>
              <td>~$1,800.00</td>
            </tr>
          </tfoot>
        </table>
        <p className="estimate-note">* Prices are estimates and may vary based on surgeon expertise, location, and individual procedure needs. Please request a consult for a personalized quote</p>
      </div>
    </div>
  );
};

export default ConsultationForm;