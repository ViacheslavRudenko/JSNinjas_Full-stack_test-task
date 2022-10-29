import express from "express";
import { superheroValidation } from "./validations/superhero.js";
import methodOverride from "method-override";
import "./db.js";
import {
  addNewSuperhero,
  deleteSuperhero,
  getSuperhero,
  getSuperheroes,
  updateSuperhero,
} from "./controller/superheroesController.js";
import { mainPage } from "./controller/mainPage.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import cors from "cors";

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());

app.get("/", mainPage);
app.get("/superheroes", getSuperheroes);
app.get("/superheroes/:id", getSuperhero);
app.post(
  "/add-superhero",
  superheroValidation,
  handleValidationErrors,
  addNewSuperhero
);
app.delete("/superheroes/:id", deleteSuperhero);
app.put(
  "/superheroes/:id",
  superheroValidation,
  handleValidationErrors,
  updateSuperhero
);

app.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
