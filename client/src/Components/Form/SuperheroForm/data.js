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

// export const productSchema = yup.object({
//   brand: yup.string().required("Brand is required."),
//   categories: yup.string().required("Categories is required."),
//   mechanism: yup.string().required("Mechanism is required."),
//   color: yup.string().required("Color is required."),
//   material: yup.string().required("Material is required."),
//   enabled: yup.string().required("Enabled is required."),
//   imageUrls: yup.array().of(yup.string().url()).required("Image is required."),
//   quantity: yup.number().required("Quantity is required."),
//   name: yup.string().min(20, "Name is full description of product, min 20."),
//   currentPrice: yup.number().required("CurrentPrice is required."),
//   isNewProduct: yup.bool().required("isNewProduct is required"),
//   isPopularProduct: yup.bool().required("isPopularProduct is required"),
// });
