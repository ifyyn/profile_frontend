import { InputField, TextArea, Button } from "../../../components/atoms";
import useEducationStore from "../../../config/educationStrore.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useEducationFormStore from "../../../config/educationFormStrore.js";
const Education = () => {
  const {
    education,
    getEducation,
    addEducation,
    updateEducation,
    getEducationById,
    deleteEducation,
  } = useEducationStore();
  const { form, setFormData, resetFormData } = useEducationFormStore();
  const { id } = useParams();
  const { institution, degree, description } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getEducation().catch(setError);
  }, [getEducation]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        try {
          const education = await getEducationById(id);
          setFormData("institution", education.institution);
          setFormData("degree", education.degree);
          setFormData("description", education.description);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getEducationById, setFormData, resetFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdate) {
        await updateEducation(id, form);
      } else {
        await addEducation(form);
      }
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };
  const heandleDelete = (id) => {
    deleteEducation(id);
  };
  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <form className="mb-6">
        <InputField
          value={institution}
          onChange={(e) => setFormData("institution", e.target.value)}
          label="Institution"
          type="text"
          name="institution"
        />
        <InputField
          value={degree}
          onChange={(e) => setFormData("degree", e.target.value)}
          label="Degree"
          type="text"
          name="degree"
        />
        <TextArea
          value={description}
          onChange={(e) => setFormData("description", e.target.value)}
          label="Description"
          name="description"
        />
        <Button onClick={handleSubmit} type="submit">
          {isUpdate ? "Update About" : "Add About"}
        </Button>
      </form>
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Education Chart</h2>
        </div>
        {education.map((educations) => (
          <div
            key={educations._id}
            className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center"
          >
            <div className="w-[450px] text-justify">
              <h3 className="text-lg font-bold">{educations.institution}</h3>
              <p>{educations.degree}</p>
              <p>{educations.description}</p>
            </div>

            <div>
              <button
                onClick={() => heandleDelete(educations._id)}
                className="bg-red-400 p-2 rounded-md text-white mr-4"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/admin/education/${educations._id}`)}
                className="bg-green p-2 rounded-md text-white"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
