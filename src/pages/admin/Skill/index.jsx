import { useEffect, useState } from "react";
import { InputField, Button } from "../../../components/atoms";
import useSkilStrore from "../../../config/skilStore.js";
import useSkilFormStore from "../../../config/skilFormStore.js";
import { useNavigate, useParams } from "react-router-dom";

const Skill = () => {
  const { skil, getSkil, getSkilById, deleteSkil, addSkil, updateSKil } =
    useSkilStrore();
  const { form, setFormData, resetFormData } = useSkilFormStore();
  const { id } = useParams();
  const { name } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getSkil();
  }, [getSkil]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        try {
          const skil = await getSkilById(id);
          setFormData("name", skil.name);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getSkilById, setFormData, resetFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required");
      return;
    }

    try {
      if (isUpdate) {
        await updateSKil(id, form);
      } else {
        await addSkil(form);
      }
      navigate("/admin/skil");
    } catch (err) {
      console.log(err);
      setError("Failed to submit the form. Please try again.");
    }
  };

  const handleDelete = (id) => {
    deleteSkil(id);
  };

  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Skill</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <InputField
          value={name}
          onChange={(e) => {
            setFormData("name", e.target.value);
            setError(null);
          }}
          label="Name"
          type="text"
          name="name"
          required
        />
        <Button type="submit">{isUpdate ? "Update Skill" : "Add Skill"}</Button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Skill Chart</h2>
        </div>
        {skil.map((skils) => (
          <div
            key={skils._id}
            className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center"
          >
            <div className="bg-slate-100 p-2 rounded-md">
              <h3 className="text-lg font-bold">{skils.name}</h3>
            </div>
            <div className="">
              <button
                className="bg-red-400 p-2 rounded-md text-white mr-5"
                onClick={() => handleDelete(skils._id)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 p-2 bg-green rounded-md text-white"
                onClick={() => navigate(`/admin/skil/${skils._id}`)}
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

export default Skill;
