import React, { useState } from 'react';

interface EditableTextProps {
  isEditing: boolean;
  defaultText: string;
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ isEditing, defaultText }) => {
  const [text, setText] = useState(defaultText);

  if (isEditing) {
    return <input type="text" value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return <span>{text}</span>;
};

export default EditableText;
