import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    default:
      return state;
  }
};
