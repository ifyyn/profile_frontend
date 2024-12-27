import { create } from "zustand";

const useAboutFormStore = create((set) => ({
  form: {
    description: "",
  },
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        description: "",
      },
    })),
}));

export default useAboutFormStore;
