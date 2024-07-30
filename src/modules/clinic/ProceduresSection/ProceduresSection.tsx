import React, { useState } from 'react';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './ProceduresSection.module.css';

interface Procedure {
  name: string;
  price: number;
  status: 'default' | 'added' | 'remove';
}

interface ProcedureCategory {
  name: string;
  procedures: Procedure[];
}

interface ProceduresSectionProps {
  isEditing: boolean;
}

const ProceduresSection: React.FC<ProceduresSectionProps> = ({ isEditing }) => {
  const [categories, setCategories] = useState<ProcedureCategory[]>([
    {
      name: 'Breast',
      procedures: [
        { name: 'Breast Augmentation', price: 5000.00, status: 'default' },
        { name: 'Breast Reduction', price: 3450.00, status: 'default' },
        { name: 'Breast Lift', price: 2800.00, status: 'default' },
        { name: 'Mastopexy Augmentation', price: 4999.99, status: 'added' },
      ],
    },
    {
      name: 'Body',
      procedures: [
        { name: 'Breast Augmentation', price: 8000.00, status: 'default' },
        { name: 'Breast Reduction', price: 3900.00, status: 'default' },
        { name: 'Breast Lift', price: 2090.99, status: 'added' },
        { name: 'Mastopexy Augmentation', price: 1800.39, status: 'remove' },
      ],
    },
  ]);

  const [cityAverage, setCityAverage] = useState('$6,800.00');

  const handleProcedureAction = (categoryIndex: number, procedureIndex: number) => {
    const newCategories = [...categories];
    const procedure = newCategories[categoryIndex].procedures[procedureIndex];
    
    if (procedure.status === 'default') {
      procedure.status = 'added';
    } else if (procedure.status === 'added') {
      procedure.status = 'remove';
    } else {
      procedure.status = 'default';
    }

    setCategories(newCategories);
  };

  return (
    <div className={styles.proceduresSection}>
      <h2>Procedures</h2>
      <p className={styles.cityAverage}>
        CITY AVERAGE FOR BREAST PROCEDURES ARE <EditableText isEditing={isEditing} defaultText={cityAverage} />
      </p>
      {categories.map((category, categoryIndex) => (
        <div key={category.name} className={styles.procedureCategory}>
          <h3><EditableText isEditing={isEditing} defaultText={category.name} /></h3>
          <table>
            <thead>
              <tr>
                <th>PROCEDURE</th>
                <th>CLINIC PRICE ESTIMATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {category.procedures.map((procedure, procedureIndex) => (
                <tr key={procedure.name}>
                  <td><EditableText isEditing={isEditing} defaultText={procedure.name} /></td>
                  <td><EditableText isEditing={isEditing} defaultText={`$${procedure.price.toFixed(2)}`} /></td>
                  <td>
                    <button
                      className={`${styles.actionButton} ${styles[procedure.status]}`}
                      onClick={() => handleProcedureAction(categoryIndex, procedureIndex)}
                    >
                      {procedure.status === 'default' && '+ Add to plan'}
                      {procedure.status === 'added' && 'Added'}
                      {procedure.status === 'remove' && 'Remove'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProceduresSection;