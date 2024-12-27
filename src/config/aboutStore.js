import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const useAboutStore = create((set) => ({
  about: [],
  getAbout: async () => {
    try {
      const response = await axiosInstance.get("/about");
      set({ about: response.data });
    } catch (error) {
      console.error("Error fetching about data:", error);
      throw error;
    }
  },
  addAbout: async (form) => {
    try {
      const response = await axiosInstance.post("/about", form);
      set((state) => ({
        about: [...state.about, response.data],
      }));
    } catch (error) {
      console.error("Error adding about data:", error);
      throw error;
    }
  },
  updateAbout: async (id, form) => {
    try {
      const response = await axiosInstance.put(`/about/${id}`, form);
      set((state) => ({
        about: state.about.map((about) =>
          about._id === id ? response.data : about
        ),
      }));
    } catch (error) {
      console.error("Error updating about data:", error);
      throw error;
    }
  },
  getAboutById: async (id) => {
    try {
      const response = await axiosInstance.get(`/about/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about data by id:", error);
      throw error;
    }
  },
  deleteAbout: async (id) => {
    try {
      await axiosInstance.delete(`/about/${id}`);
      set((state) => ({
        about: state.about.filter((about) => about._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useAboutStore;
