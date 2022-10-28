import { Route, Routes } from "react-router-dom";
import SuperheroesList from "../../views/List";
import SuperheroCard from "../../views/SuperheroCard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SuperheroesList />} />
      <Route path="/superhero/:id" element={<SuperheroCard />} />
    </Routes>
  );
};

export default Routing;
