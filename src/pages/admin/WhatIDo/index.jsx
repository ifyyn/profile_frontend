import { InputField, TextArea, Button } from "../../../components/atoms";

const WhatIDo = () => {
  return (
    <div className="w-[800px] m-auto shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">What I Do</h2>
      <form className="mb-6">
        <InputField label="Name" type="text" name="name" />
        <TextArea label="Description" name="description" />
        <Button type="submit">Add What I Do</Button>
      </form>
      <div className="mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">What I Do Chart</h2>
        </div>
        <div className="p-4 bg-white rounded shadow mb-4 flex justify-between items-center">
          <div className="w-[400px] text-justify">
            <h3 className="text-lg font-bold">Universitas Teknologi Mataram</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quidem.
            </p>
          </div>
          <div>
            <button className="bg-red-400 p-2 rounded-md text-white mr-4">
              Delete
            </button>
            <button className="bg-green p-2 rounded-md text-white">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
