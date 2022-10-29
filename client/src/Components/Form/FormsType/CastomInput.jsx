import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CastomInput = ({ inputName, control, label }) => {
  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          variant="standard"
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
export default CastomInput;
