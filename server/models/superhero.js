import mongoose from "mongoose";

const Schema = mongoose.Schema;

const superheroSchema = new Schema({
  nickname: { type: String, required: true, unique: true },
  real_name: { type: String, required: true },
  origin_description: { type: String, required: true },
  superpowers: { type: String, required: true },
  catch_phrase: { type: String, required: true },
  images: String,
});

export const Superheroes = mongoose.model("superheroes", superheroSchema);
