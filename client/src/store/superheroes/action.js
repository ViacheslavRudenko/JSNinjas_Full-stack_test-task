import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "./types";

const setRequest = (request) => {
  return { type: GET_DATA_REQUEST, payload: request };
};
const setData = (data) => {
  return { type: GET_DATA_SUCCESS, payload: data };
};
const setError = (error) => {
  return { type: GET_DATA_ERROR, payload: error };
};

// const deleteItem = (data) => {
//   return { type: deleteData, payload: data };
// };
// const getNewData = (data) => {
//   return { type: getNewDataItem, payload: data };
// };
// const editData = (data) => {
//   return { type: editDataValue, payload: data };
// };

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

export { fetchSuperheroes };
