import { useForm } from "react-hook-form";
import Form from "../Form";
import { SuperheroInputNames, superheroSchema } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const SuperheroForm = ({ initialValue, onSubmit, setModalData }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(superheroSchema),
    //defaultValues: productFormDefaultValues,
  });

  const setValidation = (values) => {
    onSubmit(values, reset);
    setModalData({ isOpen: false });
  };
  useEffect(() => reset(initialValue), [initialValue]);
  return (
    <>
      <Form
        actionWithForm={setValidation}
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
