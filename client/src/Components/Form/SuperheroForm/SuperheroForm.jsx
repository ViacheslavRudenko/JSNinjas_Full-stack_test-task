import { useForm } from "react-hook-form";
import Form from "../Form";
import { SuperheroInputNames, superheroSchema } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  editData,
  getNewData,
  setError,
} from "../../../store/superheroes/action";

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
    onSubmit(values)
      .then((res) => {
        console.log(res);
        typeAction === "add"
          ? dispatch(getNewData(res.data))
          : dispatch(editData(values));
        setModalData({ isOpen: false });
      })
      .catch((err) => {
        dispatch(setError(JSON.parse(err.request.response)));
      });
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
