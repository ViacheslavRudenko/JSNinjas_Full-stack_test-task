import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuperheroItem from "../Components/SuperheroList/ListItem";
import { fetchSuperheroes } from "../store/superheroes/action";
import { getSuperheroes } from "../api/superheroes";
import Error from "../Components/Error/Error";

const SuperheroesList = () => {
  const { data, isLoaded, error } = useSelector((state) => state.superheroes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperheroes(getSuperheroes()));
  }, []);

  const GridList = () => (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 13 }}
      component="ul"
      sx={{ gridGap: 15 }}
    >
      {data.map((superhero) => (
        <Grid key={superhero._id} component="ol" item xs={2} sm={4} md={4}>
          <SuperheroItem superhero={superhero} />
        </Grid>
      ))}
    </Grid>
  );

  return isLoaded ? (
    <Box p={2} maxWidth={1200} m="0 auto">
      <GridList />
    </Box>
  ) : (
    <Error err={error?.message} />
  );
};

export default SuperheroesList;
