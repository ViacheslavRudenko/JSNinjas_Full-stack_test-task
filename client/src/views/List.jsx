import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getSuperheroes } from "../api/superheroes";
import { useSelector } from "react-redux";
import SuperheroItem from "../Components/List/ListItem";
import { fetchSuperheroes } from "../store/superheroes/action";
import { useDispatch } from "react-redux";

const SuperheroesList = () => {
  const { data, isLoaded, error } = useSelector((state) => state.superheroes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperheroes());
  }, [data]);

  return isLoaded ? (
    <Box p={2} maxWidth={1200} m="0 auto">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        component="ul"
      >
        {data.map((superhero) => (
          <Grid key={superhero._id} component="ol" item xs={2} sm={4} md={4}>
            <SuperheroItem superhero={superhero} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Box>
      <Typography textAlign="center" pt={20} color="red">
        {error?.message}
      </Typography>
    </Box>
  );
};

export default SuperheroesList;
