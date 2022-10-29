import { useForm } from "react-hook-form";
import Form from "../Form";
import { SuperheroInputNames } from "./data";

const SuperheroForm = ({ initialValue, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    //resolver: yupResolver(productSchema),
    //defaultValues: productFormDefaultValues,
  });

  //   const setValidation = (values) => {
  //     onSubmit(values, reset);
  //   };

  return (
    <>
      <Form
        // actionWithForm={setValidation}
        formArr={SuperheroInputNames}
        handleSubmit={handleSubmit}
        errors={errors}
        btnName={"APPROVE"}
        control={control}
      />
    </>
  );
};

export default SuperheroForm;
