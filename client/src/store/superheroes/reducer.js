import store from "../store";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  DELETE_DATA,
} from "./types";

let initialState = {
  isLoaded: false,
  error: null,
  data: [],
};

const reducerSuperheroes = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return { ...state, isLoaded: action.payload };
    }
    case GET_DATA_SUCCESS: {
      return { ...state, data: action.payload };
    }
    case GET_DATA_ERROR: {
      return { ...state, error: action.payload };
    }
    case DELETE_DATA: {
      return {
        ...state,
        data: state.data.filter((data) => data._id !== action.payload),
      };
    }

    default:
      return state;
  }
};
export default reducerSuperheroes;
