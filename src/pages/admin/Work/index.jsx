import {
  InputField,
  ImageUpload,
  TextArea,
  Button,
} from "../../../components/atoms";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useWorkStore from "../../../config/workStore.js";
import useWorkFormStore from "../../../config/workFormStore.js";

const Work = () => {
  const { work, getWork, getWorkById, addWork, updateWork, deleteWork } =
    useWorkStore();
  const { form, imgPreview, setFormData, setImgPreview, resetFormData } =
    useWorkFormStore();
  const { title, description, link } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getWork();
  }, [getWork]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        const work = await getWorkById(id);
        setFormData("title", work.title);
        setFormData("description", work.description);
        setFormData("link", work.link);
        setFormData("image", work.image);
        setImgPreview(work.image);
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getWorkById, setFormData, setImgPreview, resetFormData]);

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImgPreview(URL.createObjectURL(file));
    setFormData("image", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updateWork(id, form);
    } else {
      addWork(form);
    }
    navigate("/admin/work");
  };
  const handleDelete = (id) => {
    deleteWork(id);
  };

  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Work</h2>
      <form className="mb-6">
        <InputField
          value={title}
          onChange={(e) => setFormData("title", e.target.value)}
          label="Name"
          type="text"
          name="title"
        />
        <InputField
          value={link}
          onChange={(e) => setFormData("link", e.target.value)}
          label="Link"
          type="text"
          name="link"
        />
        <TextArea
          value={description}
          onChange={(e) => setFormData("description", e.target.value)}
          label="Description"
          name="description"
        />
        <ImageUpload onChange={(e) => onImgUpload(e)} src={imgPreview} />
        <Button onClick={handleSubmit} type="submit">
          {isUpdate ? "Update Skill" : "Add Skill"}
        </Button>
      </form>
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Work Chart</h2>
        </div>
        {work.map((works) => (
          <div className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{works.title}</h3>
              <p>{works.description}</p>
            </div>
            <div>
              <button
                className="bg-red-400 p-2 rounded-md text-white "
                onClick={() => handleDelete(works._id)}
              >
                Delete
              </button>
              <button
                className="bg-green p-2 rounded-md text-white"
                onClick={() => navigate(`/admin/work/${works._id}`)}
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

export default Work;
