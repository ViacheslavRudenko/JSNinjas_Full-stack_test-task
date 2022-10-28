import { Superheroes } from "../models/superhero.js";
import { validationResult } from "express-validator";

export const getSuperheroes = (req, res) => {
  Superheroes.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Database connection error" });
    });
};

export const getSuperhero = (req, res) => {
  Superheroes.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Database connection error" });
    });
};

export const addNewSuperhero = (req, res) => {
  const post = new Superheroes({
    ...req.body,
  });
  const err = validationResult(req);

  post
    .save()
    .then((result) => {
      res.redirect("/superheroes");
    })
    .catch((error) => {
      console.log(error);
      err
        ? res.status(400).json(err.array())
        : res
            .status(500)
            .json({ success: false, message: "Database connection error" });
    });
};

export const deleteSuperhero = (req, res) => {
  Superheroes.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Database connection error" });
    });
};

export const updateSuperhero = (req, res) => {
  const err = validationResult(req);

  Superheroes.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect(`/superheroes/${req.params.id}`);
    })
    .catch((error) => {
      console.log(error);
      err
        ? res.status(400).json(err.array())
        : res
            .status(500)
            .json({ success: false, message: "Database connection error" });
    });
};
