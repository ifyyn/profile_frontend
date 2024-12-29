import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms";
import { removeAccessToken } from "../../../utils/tokenManager.js";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeAccessToken();
    navigate("/login-admin");
  };
  return (
    <div className="w-64 h-auto bg-gray-100 text-dark shadow-lg rounded-md  p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/admin">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link to="education">Education</Link>
          </li>
          <li className="mb-4">
            <Link to="experience">Experience</Link>
          </li>

          <li className="mb-4">
            <Link to="skil">Skill</Link>
          </li>

          <li className="mb-4">
            <Link to="about">About</Link>
          </li>
          <li className="mb-4">
            <Link to="work">Work</Link>
          </li>
          <li className="mb-4">
            <Link to="profile">Profile</Link>
          </li>
          <Button onClick={handleLogout}>Logout</Button>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
