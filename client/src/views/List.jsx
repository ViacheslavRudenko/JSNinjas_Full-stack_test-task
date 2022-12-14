import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SuperheroItem from "../Components/SuperheroList/ListItem";
import { fetchSuperheroes } from "../store/superheroes/action";
import { addNewSuperhero, getSuperheroes } from "../api/superheroes";
import BasicModal from "../Components/Modal/Modal";
import SuperheroForm from "../Components/Form/SuperheroForm/SuperheroForm";
import { useLocation } from "react-router-dom";
import Paginations from "../Components/Pagination/Paginations";

const SuperheroesList = () => {
  const { data, isLoaded, error, quantity } = useSelector(
    (state) => state.superheroes
  );
  const [modalData, setModalData] = useState({
    isOpen: false,
  });
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchSuperheroes(getSuperheroes(location.pathname + location.search))
    );
  }, [location]);

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
    <Stack component="ul">
      {data.map((superhero) => (
        <Stack key={superhero._id} component="ol">
          <SuperheroItem superhero={superhero} />
        </Stack>
      ))}
    </Stack>
  );

  const NewHero = () => (
    <Stack>
      <Button onClick={addNewHero}>Add new superhero</Button>
    </Stack>
  );

  return (
    <Box p={2} maxWidth={1200} m="0 auto">
      {isLoaded && (
        <>
          <NewHero />
          <GridList />
          <BasicModal modalData={modalData} setModalData={setModalData} />
          <Stack
            sx={{
              alignItems: "center",
              p: 5,
            }}
          >
            {quantity && <Paginations />}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default SuperheroesList;
