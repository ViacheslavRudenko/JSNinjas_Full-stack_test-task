import { Typography } from "@mui/material";

const Error = ({ err }) => {
  return (
    <Typography textAlign="center" pt={20} color="red">
      {err}
    </Typography>
  );
};

export default Error;
