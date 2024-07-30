import React, { useState } from 'react';
import './EditableImage.css';

interface EditableImageProps {
  isEditing: boolean;
  src: string;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ isEditing, src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isEditing) {
    return (
      <div className="editableImage">
        <img src={imageSrc} alt={alt} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
    );
  }

  return <img src={imageSrc} alt={alt} />;
};

export default EditableImage;