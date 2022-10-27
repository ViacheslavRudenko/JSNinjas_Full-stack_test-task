import express from "express";
import { superhero } from "./models/superhero.js";
import { superheroValidation } from "./validations/superhero.js";
import { validationResult } from "express-validator";
import mongoose from "mongoose";

const db =
  "mongodb+srv://user:wDAM3gi33hGWsrG7@cluster0.8nfslkf.mongodb.net/JSNinjas_Full-stack_test-task?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then((res) => {
    console.log("Connected to BD");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 3000;

const app = express();
app.use(express.json());

app.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

app.post("/superheroes", superheroValidation, async (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json(err.array());
  }

  const doc = new superhero({
    nickname: req.body.nickname,
    real_name: req.body.real_name,
    origin_description: req.body.origin_description,
    superpowers: req.body.superpowers,
    catch_phrase: req.body.catch_phrase,
    images: req.body.images,
  });

  const superheroData = await doc.save();
  res.json(superheroData);
});
