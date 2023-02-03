import * as TYPES from "../constants/productConstants";
import * as EndPoint from "../../Api/services";
import Axios from "../../Api/Axios";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: TYPES.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(EndPoint.ALL_PRODUCT_LIST);
    dispatch({ type: TYPES.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TYPES.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({
    type: TYPES.PRODUCT_DETAILS_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: TYPES.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TYPES.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
