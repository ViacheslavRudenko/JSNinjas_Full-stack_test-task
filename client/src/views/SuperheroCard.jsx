import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSuperhero } from "../api/superheroes";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuperheroes } from "../store/superheroes/action";
import SuperheroItem from "../Components/SuperheroList/ListItem";
import { Box, Typography } from "@mui/material";
import Error from "../Components/Error/Error";

const SuperheroCard = () => {
  const params = useParams();
  const { data, isLoaded, error } = useSelector((state) => state.superheroes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperheroes(getSuperhero(params.id)));
  }, []);

  useEffect(() => {});
  return (
    <Box maxWidth={1200} m="0 auto">
      {!error ? (
        isLoaded && <SuperheroItem superhero={data[0]} isCard={true} />
      ) : (
        <Error err={error?.message} />
      )}
    </Box>
  );
};

export default SuperheroCard;
