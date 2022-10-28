import mongoose from "mongoose";
const db =
  "mongodb+srv://user:wDAM3gi33hGWsrG7@cluster0.8nfslkf.mongodb.net/JSNinjas_Full-stack_test-task?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then((res) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
