import React from "react";

const ImageUpload = ({ label, name, onChange, src }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {src && <img src={src} alt="Preview" className="w-20" />}
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default ImageUpload;
