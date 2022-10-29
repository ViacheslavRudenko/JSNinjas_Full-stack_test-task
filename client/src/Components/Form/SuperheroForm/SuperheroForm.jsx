import { useForm } from "react-hook-form";
import Form from "../Form";
import { SuperheroInputNames, superheroSchema } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editData, getNewData } from "../../../store/superheroes/action";

const SuperheroForm = ({
  initialValue,
  onSubmit,
  setModalData,
  typeAction = "add",
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(superheroSchema),
    //defaultValues: productFormDefaultValues,
  });

  const dispatch = useDispatch();
  const setValidation = (values) => {
    typeAction === "add"
      ? onSubmit(values).then((res) => {
          dispatch(getNewData(res.data));
        })
      : onSubmit(values._id, values).then((res) => {
          dispatch(editData(values));
        });
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
