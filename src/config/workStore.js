import { create } from "zustand";
import { axiosInstance } from "./axiosInstance.js";

const useWorkStore = create((set) => ({
  work: [],
  getWork: async () => {
    try {
      const { data } = await axiosInstance.get("/work");
      set({ work: data });
    } catch (error) {
      console.error(error);
    }
  },
  getWorkById: async (id) => {
    try {
      const { data } = await axiosInstance.get(`/work/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  addWork: async (work) => {
    try {
      const formData = new FormData();
      formData.append("title", work.title);
      formData.append("description", work.description);
      formData.append("link", work.link);
      formData.append("image", work.image);

      const { data } = await axiosInstance.post("/work", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      set((state) => ({
        work: [...state.work, data],
      }));
    } catch (error) {
      console.error(error);
    }
  },
  updateWork: async (id, updatedWork) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedWork.title);
      formData.append("description", updatedWork.description);
      formData.append("link", updatedWork.link);
      formData.append("image", updatedWork.image);

      const { data } = await axiosInstance.put(`/work/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      set((state) => ({
        work: state.work.map((work) => (work._id === id ? data : work)),
      }));
    } catch (error) {
      console.error(error);
    }
  },
  deleteWork: async (id) => {
    try {
      await axiosInstance.delete(`/work/${id}`);
      set((state) => ({
        work: state.work.filter((work) => work._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useWorkStore;
