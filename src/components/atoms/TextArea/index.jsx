import React from "react";

const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        rows="4"
      />
    </div>
  );
};

export default TextArea;
