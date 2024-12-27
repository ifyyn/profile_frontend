import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green">
          Fathul <span className="text-dark">Arifin</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to={"/"} className="text-gray-600 hover:text-green ">
            Home
          </Link>
          <Link to={"/work"} className="text-gray-600 hover:text-green">
            Work
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark hover:text-green focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-3">
          <Link to={"/"} className="text-gray-600 hover:text-green block p-2">
            Home
          </Link>

          <Link
            to={"/work"}
            className="text-gray-600 hover:text-green block p-2"
          >
            Work
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
