import { Box, Button, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuperheroItem from "../Components/SuperheroList/ListItem";
import { fetchSuperheroes } from "../store/superheroes/action";
import { addNewSuperhero, getSuperheroes } from "../api/superheroes";
import Error from "../Components/Error/Error";
import BasicModal from "../Components/Modal/Modal";
import SuperheroForm from "../Components/Form/SuperheroForm/SuperheroForm";

const SuperheroesList = () => {
  const { data, isLoaded, error } = useSelector((state) => state.superheroes);
  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuperheroes(getSuperheroes()));
  }, []);

  const addNewHero = () => {
    setModalData({
      title: "Add new superhiro",
      isOpen: true,
      content: (
        <SuperheroForm onSubmit={addNewSuperhero} setModalData={setModalData} />
      ),
    });
  };

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

  const NewHero = () => (
    <Stack>
      <Button onClick={addNewHero}>Add new superhero</Button>
    </Stack>
  );

  return isLoaded ? (
    <Box p={2} maxWidth={1200} m="0 auto">
      <NewHero />
      <GridList />
      <BasicModal modalData={modalData} setModalData={setModalData} />
    </Box>
  ) : (
    <Error err={error?.message} />
  );
};

export default SuperheroesList;
