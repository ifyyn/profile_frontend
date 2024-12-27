import { create } from "zustand";

const useEducationFormStore = create((set) => ({
  form: {
    institution: "",
    degree: "",
    description: "",
  },
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        institution: "",
        degree: "",
        description: "",
      },
    })),
}));

export default useEducationFormStore;
