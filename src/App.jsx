import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./components/templates/Layouts";
import HomePage from "./pages/user/HomePage";
import WorkPage from "./pages/user/WorkPage";
import { Form } from "./components/organisms";
import AdminLayouts from "./components/templates/AdminLayouts";
import Education from "./pages/admin/Education";
import Work from "./pages/admin/Work";
import Dashboard from "./pages/admin/Dashoard";
import Experience from "./pages/admin/Experience";
import Courses from "./pages/admin/Courses";
import Skill from "./pages/admin/Skill";
import About from "./pages/admin/About";
import WhatIDo from "./pages/admin/WhatIDo";
import Login from "./pages/admin/Login";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen font-poppins">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route index element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
            </Route>
            <Route path="/admin" element={<AdminLayouts />}>
              <Route index element={<Dashboard />} />
              <Route path="education" element={<Education />} />
              <Route path="education/:id" element={<Education />} />
              <Route path="work" element={<Work />} />
              <Route path="work/:id" element={<Work />} />
              <Route path="experience" element={<Experience />} />
              <Route path="experience/:id" element={<Experience />} />
              <Route path="courses" element={<Courses />} />
              <Route path="skil" element={<Skill />} />
              <Route path="skil/:id" element={<Skill />} />
              <Route path="about" element={<About />} />
              <Route path="about/:id" element={<About />} />
            </Route>
            <Route path="/login-admin" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
