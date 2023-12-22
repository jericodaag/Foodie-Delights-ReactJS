import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // Automatically trigger image upload when a file is selected
    if (file) {
      onImageUpload(file);
      setSelectedImage(null); // Reset the selected image after handling upload
    }
  };

  return (
    <div className="mb-3">
      <label className="btn btn-success">
        <BsCloudUpload className="mr-2" /> Upload Image
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </label>

      {/* Optionally, you can display the selected image name here */}
      {selectedImage && <span className="ml-2">Selected: {selectedImage.name}</span>}
    </div>
  );
};

export default ImageUpload;
