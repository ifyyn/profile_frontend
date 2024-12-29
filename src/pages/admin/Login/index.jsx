import React from "react";
import { Button, InputField } from "../../../components/atoms";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../../config/authStore.js";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const loginResponse = await login(email, password);
      if (loginResponse) {
        navigate("/admin");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Card Container */}
      <div className="w-full max-w-md sm:max-w-sm bg-white rounded-lg shadow-lg p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <InputField
              label={"Email"}
              type={"email"}
              name={"email"}
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <InputField
              label={"Password"}
              type={"password"}
              name={"password"}
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            type={"submit"}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
