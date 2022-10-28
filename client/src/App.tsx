import React from "react";
import { getSuperheroes } from "./api/superheroes";

function App() {
  getSuperheroes().then((data) => console.log(data));

  return <div></div>;
}

export default App;
