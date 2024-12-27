import { InputField, TextArea, Button } from "../../../components/atoms";
import useOrganizationalStore from "../../../config/organizationalStore.js";
import useOrganizationalFormStrote from "../../../config/organizationalFormStore.js";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Experience = () => {
  const {
    organizational,
    getOrganizational,
    addOrganizational,
    updateOrganizational,
    getOrganizationalById,
    deleteOrganizational,
  } = useOrganizationalStore();
  const { form, setFormData, resetFormData } = useOrganizationalFormStrote();
  const { id } = useParams();
  const { name, description } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getOrganizational();
  }, [getOrganizational]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        try {
          const organizational = await getOrganizationalById(id);
          setFormData("name", organizational.name);
          setFormData("description", organizational.description);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getOrganizationalById, setFormData, resetFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdate) {
        await updateOrganizational(id, form);
      } else {
        await addOrganizational(form);
      }
      navigate("/admin/experience");
    } catch (err) {
      console.log(err);
    }
  };

  const heandleDelete = (id) => {
    deleteOrganizational(id);
  };

  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <form className="mb-6">
        <InputField
          value={name}
          onChange={(e) => setFormData("name", e.target.value)}
          label="Name"
          type="text"
          name="name"
        />
        <TextArea
          value={description}
          onChange={(e) => setFormData("description", e.target.value)}
          label="Description"
          name="description"
        />
        <Button onClick={handleSubmit} type="submit">
          {isUpdate ? "Update Organizational" : "Add Organizational"}
        </Button>
      </form>
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Experience Chart</h2>
        </div>
        {organizational.map((organizationals) => (
          <div className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center">
            <div className="w-[450px] text-justify">
              <h3 className="text-lg font-bold">{organizationals.name}</h3>
              <p>{organizationals.description}</p>
            </div>
            <div>
              <button
                onClick={() => heandleDelete(organizationals._id)}
                className="bg-red-400 p-2 rounded-md text-white mr-4"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  navigate(`/admin/experience/${organizationals._id}`)
                }
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

export default Experience;
