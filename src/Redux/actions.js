import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";


const getRequest = () => ({ 
    type: GET_REQUEST
 });
const getSuccess = (payload) => ({
  type: GET_SUCCESS,
  payload,
});
const getFailure = () => ({
    type: GET_FAILURE
 });



function getProductsData(dispatch) {
  dispatch({
    type: getRequest,
  });
  try {
    let res = axios.get("https://movie-fake-server.herokuapp.com/products");
    let data =  res.data;

    dispatch({
      type: getSuccess,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: getFailure,
    });
  }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };