import { Box, Button, List, Stack } from "@mui/material";
import CustomErrorMessage from "./CastomErrorMessage";
import CastomInput from "./FormsType/CastomInput";

const Form = ({
  actionWithForm,
  formArr,
  handleSubmit,
  handleChange,
  errors,
  btnName,
  control,
}) => {
  const renderFormType = ({ inputName, formType, label }) => {
    switch (formType) {
      default:
        return (
          <Stack>
            <CastomInput
              inputName={inputName}
              control={control}
              label={label}
            />
            <CustomErrorMessage
              err={errors[inputName]?.message || errors[inputName]}
            />
          </Stack>
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit((values) => actionWithForm(values))}
      onChange={handleChange}
    >
      <Stack
        pb={2}
        maxWidth={500}
        minwidth={{ mobile: 320, desktop: 320 }}
        m="auto"
      >
        <List>
          {formArr.map((formData) => (
            <Box key={formData.inputName} component="li" pt={1} pb={1}>
              {renderFormType(formData)}
            </Box>
          ))}
        </List>
        <CustomErrorMessage err={errors.message} />

        {btnName && <Button type="submit">{btnName}</Button>}
      </Stack>
    </form>
  );
};

export default Form;
