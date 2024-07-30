import React from 'react';

interface EditModeToggleProps {
  isEditing: boolean;
  onToggle: () => void;
}

const EditModeToggle: React.FC<EditModeToggleProps> = ({ isEditing, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isEditing ? 'Save Changes' : 'Edit Page'}
    </button>
  );
};

export default EditModeToggle;