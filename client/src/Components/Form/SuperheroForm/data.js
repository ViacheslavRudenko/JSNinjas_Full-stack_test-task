import * as yup from "yup";

export const SuperheroInputNames = [
  { inputName: "nickname", formType: "text", label: "Nickname" },
  { inputName: "real_name", formType: "text", label: "Real name" },
  {
    inputName: "origin_description",
    formType: "number",
    label: "Full descriptions",
  },
  { inputName: "superpowers", formType: "text", label: "Superpowers" },
  { inputName: "catch_phrase", formType: "text", label: "Catch phrase" },
  { inputName: "images", formType: "text", label: "Url image" },
];

export const superheroSchema = yup.object({
  nickname: yup.string().min(3).max(15).required("Nickname is required."),
  real_name: yup.string().min(3).max(15).required("Real name is required."),
  origin_description: yup
    .string()
    .min(10)
    .required("Full descriptions is required."),
  superpowers: yup.string().min(15).required("Superpowers is required."),
  catch_phrase: yup.string().min(15).required("Catch phrase is required."),
  images: yup.string().url().required("Url image is required."),
});
