import { body } from "express-validator";

export const superheroValidation = [
  body("nickname", "Nickname must contain: min 3, max 15 symbols").isLength({
    min: 3,
    max: 15,
  }),
  body("real_name", "Real name must contain: min 3, max 15 symbols").isLength({
    min: 3,
    max: 15,
  }),
  body(
    "origin_description",
    "Description must contain: min 10 symbols"
  ).isLength({
    min: 10,
  }),
  body("superpowers", "Super powers must contain: min 15 symbols").isLength({
    min: 15,
  }),
  body("catch_phrase", "Catch phrase must contain: min 15 symbols").isLength({
    min: 15,
  }),
  body("images", "Images must be in url format").optional(),
];
