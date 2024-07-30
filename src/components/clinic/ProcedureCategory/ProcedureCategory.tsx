import React from 'react';
import EditableText from '../EditableText/EditableText';
import styles from './ProcedureCategory.module.css';


interface Procedure {
  name: string;
  price: number;
}

interface ProcedureCategoryProps {
  isEditing: boolean;
  categoryName: string;
  procedures: Procedure[];
}

const ProcedureCategory: React.FC<ProcedureCategoryProps> = ({ isEditing, categoryName, procedures }) => {
  return (
    <div className="procedure-category">
      <h3>{categoryName}</h3>
      {procedures.map((procedure, index) => (
        <div key={index} className="procedure-item">
          <EditableText isEditing={isEditing} defaultText={procedure.name} />
          <EditableText isEditing={isEditing} defaultText={`$${procedure.price.toFixed(2)}`} />
          <button>+ Add to plan</button>
        </div>
      ))}
    </div>
  );
};

export default ProcedureCategory;