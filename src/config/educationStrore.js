import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const useEducationStore = create((set) => ({
  education: [],
  getEducation: async () => {
    try {
      const response = await axiosInstance.get("/education");
      set({ education: response.data });
    } catch (error) {
      console.error("Error fetching about data:", error);
      throw error;
    }
  },
  addEducation: async (form) => {
    try {
      const response = await axiosInstance.post("/education", form);
      set((state) => ({
        education: [...state.education, response.data],
      }));
    } catch (error) {
      console.error("Error adding about data:", error);
      throw error;
    }
  },
  updateEducation: async (id, form) => {
    try {
      const response = await axiosInstance.put(`/education/${id}`, form);
      set((state) => ({
        education: state.education.map((education) =>
          education._id === id ? response.data : education
        ),
      }));
    } catch (error) {
      console.error("Error updating about data:", error);
      throw error;
    }
  },
  getEducationById: async (id) => {
    try {
      const response = await axiosInstance.get(`/education/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about data by id:", error);
      throw error;
    }
  },
  deleteEducation: async (id) => {
    try {
      await axiosInstance.delete(`/education/${id}`);
      set((state) => ({
        education: state.education.filter((education) => education._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useEducationStore;
