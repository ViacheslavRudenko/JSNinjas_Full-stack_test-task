import { addNewSuperhero } from "../../api/superheroes";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  DELETE_DATA,
  GET_NEW_DATA,
  EDIT_DATA,
} from "./types";

const setRequest = (request) => {
  return { type: GET_DATA_REQUEST, payload: request };
};
const setData = (data) => {
  return { type: GET_DATA_SUCCESS, payload: data };
};
const setError = (error) => {
  return { type: GET_DATA_ERROR, payload: error };
};

const deleteItem = (id) => {
  return { type: DELETE_DATA, payload: id };
};
const getNewData = (data) => {
  addNewSuperhero(data);
  return { type: GET_NEW_DATA, payload: data };
};
const editData = (data) => {
  return { type: EDIT_DATA, payload: data };
};

const fetchSuperheroes = (getData) => {
  return async (dispatch) => {
    await getData
      .then((response) => {
        dispatch(setRequest(true));
        dispatch(setData(response.data));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export { fetchSuperheroes, deleteItem, getNewData, editData, setError };
