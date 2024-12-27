import { useEffect, useState } from "react";
import { TextArea, Button, InputField } from "../../../components/atoms";
import useAboutFromStore from "../../../config/aboutFormStrore.js";
import useAboutStore from "../../../config/aboutStore.js";
import { useParams, useNavigate } from "react-router-dom";

const About = () => {
  const { about, getAbout, addAbout, updateAbout, getAboutById, deleteAbout } =
    useAboutStore();
  const { form, setFormData, resetFormData } = useAboutFromStore();
  const { id } = useParams();
  const { description } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAbout().catch(setError);
  }, [getAbout]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        try {
          const about = await getAboutById(id);
          setFormData("description", about.description);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getAboutById, setFormData, resetFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdate) {
        await updateAbout(id, form);
      } else {
        await addAbout(form);
      }
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };
  const heandleDelete = (id) => {
    deleteAbout(id);
  };

  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <form className="mb-6">
        <TextArea
          label="Description"
          name="description"
          value={description}
          onChange={(e) => setFormData("description", e.target.value)}
        />

        <Button onClick={handleSubmit} type="submit">
          {isUpdate ? "Update About" : "Add About"}
        </Button>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Chart</h2>
        </div>
        {about.map((abouts) => (
          <div
            key={abouts._id}
            className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center"
          >
            <div className="w-[400px] text-justify">
              <p>{abouts.description}</p>
            </div>
            <div className="">
              <button
                onClick={() => heandleDelete(abouts._id)}
                className="bg-red-400 p-2 rounded-md text-white mr-4"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/admin/about/${abouts._id}`)}
                className="bg-green-400 p-2 bg-green rounded-md text-white"
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

export default About;
