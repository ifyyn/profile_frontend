import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms";

const CardWork = ({ title, description, imageUrl, link_to }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-coklate text-green">
          {title}
        </h3>
        <p className="text-sm font-semibold text-gray-800">{description}</p>
      </div>
      <Link to={link_to}>
        <button className="bg-dark w-full p-2 text-gray-300">
          Source Code
        </button>
      </Link>
    </div>
  );
};

export default CardWork;
