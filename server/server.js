import express from "express";
import { Superheroes } from "./models/superhero.js";
import { superheroValidation } from "./validations/superhero.js";
import { validationResult } from "express-validator";
import methodOverride from "method-override";
import "./db.js";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send(
    ` <h1 style='text-align:center'>Welcome to our superheroes database</h1>
      <ul>
        <li><a href='superheroes'>Superheroes list</a></li>
      </ul>`
  );
});

//Get all list
app.get("/superheroes", (req, res) => {
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
});

//Get one superhero by id
app.get("/superheroes/:id", (req, res) => {
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
});

//Post new superhero
app.post("/add-superhero", superheroValidation, (req, res) => {
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
});

//Delete superhiro from db
app.delete("/superheroes/:id", (req, res) => {
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
});

//Update superhero data
app.put("/superheroes/:id", superheroValidation, (req, res) => {
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
});

app.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
