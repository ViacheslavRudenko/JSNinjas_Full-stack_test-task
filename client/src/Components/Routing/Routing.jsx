import { Route, Routes, Navigate } from "react-router-dom";
import SuperheroesList from "../../views/List";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace to="/superheroes?page=1&limit=5" />}
      ></Route>
      <Route path="/superheroes" element={<SuperheroesList />}>
        <Route path="superhero/:id" element={<SuperheroesList />} />
      </Route>
    </Routes>
  );
};

export default Routing;
