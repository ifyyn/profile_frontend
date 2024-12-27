import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const useSkilStrore = create((set) => ({
  skil: [],
  getSkil: async () => {
    try {
      const response = await axiosInstance.get("/skil");
      set({ skil: response.data });
    } catch (error) {
      console.error("Error fetching skil data:", error);
      throw error;
    }
  },
  addSkil: async (form) => {
    try {
      const response = await axiosInstance.post("/skil", form);
      set((state) => ({
        skil: [...state.skil, response.data],
      }));
    } catch (error) {
      console.error("Error adding skil data:", error);
      throw error;
    }
  },
  updateSKil: async (id, form) => {
    try {
      const response = await axiosInstance.put(`/skil/${id}`, form);
      set((state) => ({
        skil: state.skil.map((skil) =>
          skil._id === id ? response.data : skil
        ),
      }));
    } catch (error) {
      console.error("Error updating about data:", error);
      throw error;
    }
  },
  getSkilById: async (id) => {
    try {
      const response = await axiosInstance.get(`/skil/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about data by id:", error);
      throw error;
    }
  },
  deleteSkil: async (id) => {
    try {
      await axiosInstance.delete(`/skil/${id}`);
      set((state) => ({
        skil: state.skil.filter((skil) => skil._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useSkilStrore;
