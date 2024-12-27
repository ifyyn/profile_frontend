import { create } from "zustand";

const useOrganizationalFormStore = create((set) => ({
  form: {
    name: "",
    description: "",
  },
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        name: "",
        description: "",
      },
    })),
}));

export default useOrganizationalFormStore;
