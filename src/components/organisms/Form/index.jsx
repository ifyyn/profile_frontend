import { TextArea, ImageUpload, InputField } from "../../atoms";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Input Data Form</h2>
      <InputField
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextArea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <ImageUpload label="Upload Image" name="image" onChange={handleChange} />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
