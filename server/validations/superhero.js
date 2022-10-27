import { body } from "express-validator";

export const superheroValidation = [
  body("nickname").isLength({ min: 3, max: 15 }),
  body("real_name").isLength({ min: 3, max: 15 }),
  body("origin_description").isLength({ min: 10 }),
  body("superpowers").isLength({ min: 15 }),
  body("catch_phrase").isLength({ min: 15 }),
  body("images").optional().isURL(),
];
