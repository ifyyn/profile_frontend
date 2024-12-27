import { create } from "zustand";

const useWorkFormStore = create((set) => ({
  form: {
    title: "",
    description: "",
    link: "",
    image: "",
  },
  imgPreview: null,
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  setImgPreview: (preview) =>
    set(() => ({
      imgPreview: preview,
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        title: "",
        description: "",
        link: "",
        image: "",
      },
      imgPreview: null,
    })),
}));

export default useWorkFormStore;
