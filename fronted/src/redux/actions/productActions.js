import * as TYPES from "../constants/productContants";
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
