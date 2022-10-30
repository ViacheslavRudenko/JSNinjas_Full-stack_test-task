import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Close, Create } from "@mui/icons-material";
import { delleteSuperhero, updateSuperhero } from "../../api/superheroes";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/superheroes/action";
import { useState } from "react";
import BasicModal from "../Modal/Modal";
import { Link } from "react-router-dom";
import SuperheroForm from "../Form/SuperheroForm/SuperheroForm";

const SuperheroItem = ({ superhero }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
  });

  const dispatch = useDispatch();
  const textStyle = {
    p: 0.5,
    border: "none",
    span: {
      fontWeight: "bold",
      pl: 1,
    },
  };
  const linkStyle = { textDecoration: "none", color: "black" };

  const swetDeleteItem = (e) => {
    e.preventDefault();
    delleteSuperhero(superhero._id);
    dispatch(deleteItem(superhero._id));
  };
  const setEditItem = (e) => {
    e.preventDefault();
    setModalData({
      title: "Edit superhiro card",
      isOpen: true,
      content: (
        <SuperheroForm
          initialValue={superhero}
          onSubmit={updateSuperhero}
          setModalData={setModalData}
          typeAction={"upd"}
        />
      ),
    });
  };

  const BoxActionWithCard = () => (
    <Grid item xs={1}>
      {!superhero.real_name ? (
        <Button onClick={swetDeleteItem}>
          <Close />
        </Button>
      ) : (
        <Button onClick={setEditItem}>
          <Create />
        </Button>
      )}
    </Grid>
  );

  const BoxImg = () => (
    <Grid item xs={3}>
      {superhero.images ? (
        <Box
          component="img"
          maxWidth={160}
          alt={`${superhero.nickname} photo`}
          src={superhero.images}
          display="block"
          m="0 auto"
        ></Box>
      ) : (
        <Stack align="center" height="100%" justifyContent="center">
          no image
        </Stack>
      )}
    </Grid>
  );

  const CardContent = () => (
    <Grid item xs>
      <Box component="h6" fontSize={18} textAlign="center" m={1}>
        {superhero.nickname}
      </Box>
      {superhero.real_name ? (
        <Box>
          <Typography sx={textStyle}>
            <Typography component="span">Real name: </Typography>
            {superhero.real_name}
          </Typography>
          <Typography sx={textStyle}>
            <Typography component="span">Super powers: </Typography>
            {superhero.superpowers}
          </Typography>
          <Typography sx={textStyle}>
            <Typography component="span">Catch phrase: </Typography>
            {superhero.catch_phrase}
          </Typography>
          <Typography sx={textStyle}>
            <Typography component="span">Description: </Typography>
            {superhero.origin_description}
          </Typography>
        </Box>
      ) : (
        <Link to={`/superheroes/superhero/${superhero._id}`} style={linkStyle}>
          <Stack pt={10}>
            <Button>Show more info</Button>
          </Stack>
        </Link>
      )}
    </Grid>
  );

  return (
    <Grid container spacing={3} borderBottom="1px solid black" pb={3} pt={3}>
      <BoxImg />
      <CardContent />
      <BoxActionWithCard />
      <BasicModal modalData={modalData} setModalData={setModalData} />
    </Grid>
  );
};

export default SuperheroItem;
