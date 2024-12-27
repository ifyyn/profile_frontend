import React from "react";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default InputField;
