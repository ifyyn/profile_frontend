import { create } from "zustand";

const useSkilFormStore = create((set) => ({
  form: {
    name: "",
  },
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        name: "",
      },
    })),
}));

export default useSkilFormStore;
