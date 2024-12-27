import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const useOrganizationalStore = create((set) => ({
  organizational: [],
  getOrganizational: async () => {
    try {
      const response = await axiosInstance.get("/organizational");
      set({ organizational: response.data });
    } catch (error) {
      console.error("Error fetching about data:", error);
      throw error;
    }
  },
  addOrganizational: async (form) => {
    try {
      const response = await axiosInstance.post("/organizational", form);
      set((state) => ({
        organizational: [...state.organizational, response.data],
      }));
    } catch (error) {
      console.error("Error adding about data:", error);
      throw error;
    }
  },
  updateOrganizational: async (id, form) => {
    try {
      const response = await axiosInstance.put(`/organizational/${id}`, form);
      set((state) => ({
        organizational: state.organizational.map((organizational) =>
          organizational._id === id ? response.data : organizational
        ),
      }));
    } catch (error) {
      console.error("Error updating about data:", error);
      throw error;
    }
  },
  getOrganizationalById: async (id) => {
    try {
      const response = await axiosInstance.get(`/organizational/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about data by id:", error);
      throw error;
    }
  },
  deleteOrganizational: async (id) => {
    try {
      await axiosInstance.delete(`/organizational/${id}`);
      set((state) => ({
        organizational: state.organizational.filter(
          (organizational) => organizational._id !== id
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useOrganizationalStore;
