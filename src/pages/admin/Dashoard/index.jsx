import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";
const Dashboard = () => {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login-admin");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (response.status !== 200) {
        navigate("/login-admin");
      }

      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error during authentication check:", error);
      navigate("/login-admin");
    }
  };

  fetchData();

  const barData = {
    labels: [
      "Education",
      "Experience",
      "Courses",
      "Skill",
      "What I Do",
      "About",
      "Work",
      "Profile",
    ],
    datasets: [
      {
        label: "Data Overview",
        data: [12, 19, 3, 5, 2, 3, 9, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Activity",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="w-[800px] m-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Data Overview</h3>
        <Bar data={barData} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Monthly Activity</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default Dashboard;
