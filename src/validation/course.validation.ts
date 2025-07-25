import * as Yup from "yup";

export const courseSchema = Yup.object({
  name: Yup.string().required("Course name is required"),
  description: Yup.string().required("Description is required"),
  color: Yup.string().required("Color is required"),
});

export const uploadSchema = Yup.object({
  name: Yup.string().required("Course name is required"),
  document: Yup.mixed().required("Please select at least one file"),
});
