import { Box, Button, Typography } from "@mui/material";
import { Close, Create } from "@mui/icons-material";

const SuperheroItem = ({ superhero, isCard = false }) => {
  const textStyle = {
    p: 0.5,
    border: "none",
    span: {
      fontWeight: "bold",
      pl: 1,
    },
  };

  const BoxActionWithCard = () => (
    <Box textAlign="end">
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("closed");
        }}
      >
        <Close />
      </Button>
      <Button>
        <Create />
      </Button>
    </Box>
  );

  const CardContent = () => (
    <>
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
    </>
  );

  return (
    <Box
      display={isCard && "flex"}
      flexDirection={isCard && "row"}
      pt={isCard && 10}
    >
      {!isCard && <BoxActionWithCard />}
      <CardContent />
    </Box>
  );
};

export default SuperheroItem;
