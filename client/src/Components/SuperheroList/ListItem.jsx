import { Box, Button, Typography } from "@mui/material";
import { Close, Create } from "@mui/icons-material";
import { delleteSuperhero } from "../../api/superheroes";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/superheroes/action";
import { useState } from "react";
import BasicModal from "../Modal/Modal";
import { Link } from "react-router-dom";
import SuperheroForm from "../Form/SuperheroForm/SuperheroForm";

const SuperheroItem = ({ superhero, isCard = false }) => {
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
      content: <SuperheroForm initialValue={superhero} />,
    });
  };

  const BoxActionWithCard = () => (
    <Box textAlign="end">
      <Button onClick={swetDeleteItem}>
        <Close />
      </Button>
      <Button onClick={setEditItem}>
        <Create />
      </Button>
    </Box>
  );

  const CardContent = () => (
    <Link
      to={`/superhero/${superhero._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <Box
        component="img"
        maxWidth={160}
        alt={`${superhero.nickname} photo`}
        src={superhero.images}
        m="0 auto"
        display="block"
      ></Box>
      <Box>
        <Box component="h6" fontSize={18} textAlign="center">
          {superhero.nickname}
        </Box>
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
    </Link>
  );

  return (
    <Box
      display={isCard && "flex"}
      flexDirection={isCard && "row"}
      pt={isCard && 10}
    >
      {!isCard && <BoxActionWithCard />}
      <CardContent />
      <BasicModal modalData={modalData} setModalData={setModalData} />
    </Box>
  );
};

export default SuperheroItem;
