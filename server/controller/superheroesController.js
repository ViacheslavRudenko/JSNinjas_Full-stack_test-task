import { Superheroes } from "../models/superhero.js";
import { validationResult } from "express-validator";

export const getSuperheroes = (req, res) => {
  const { page = 1, limit } = req.query;
  const dataPromis = Superheroes.find();

  dataPromis.limit(limit * 1).skip((page - 1) * limit);
  dataPromis
    .then((data) => {
      const dataArr = data.map((dataItem) => {
        return {
          _id: dataItem._id,
          nickname: dataItem.nickname,
          images: dataItem.images,
        };
      });
      Superheroes.count({}, function (err, count) {
        res.send({ data: dataArr, quantity: count });
      });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ success: false, message: "Database connection error" });
    });
};

export const getSuperhero = (req, res) => {
  Superheroes.findById(req.params.id)
    .then((data) => {
      res.send({ data: [data] });
    })
    .catch((error) => {
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
      res.json(result);
    })
    .catch((error) => {
      !err.array()
        ? res.status(400).json(err.array())
        : res.status(500).json(
            error.code === 11000 && {
              success: false,
              message: "Nick name is not unique",
            }
          );
    });
};

export const deleteSuperhero = (req, res) => {
  Superheroes.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ success: false, message: "Database connection error" });
    });
};

export const updateSuperhero = (req, res) => {
  const err = validationResult(req);

  Superheroes.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      !err.array()
        ? res.status(400).json(err.array())
        : res.status(400).send(
            +error.code === 11000
              ? {
                  success: false,
                  message: "Nick name is not unique",
                }
              : {
                  success: false,
                  message: "Server error",
                }
          );
    });
};
