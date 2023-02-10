import Axios from "../../Api/Axios";
import { CART_EMPTY } from "../constants/cartConstants";
import * as TYPES from "../constants/orderConstants";
import * as ENDPOINT from "../../Api/services";
export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: TYPES.ORDER_CREATE_REQUEST, payload: order });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await Axios.post(ENDPOINT.ORDERS_API, order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: TYPES.ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: TYPES.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: TYPES.ORDER_DETAILS_REQUEST, payload: orderId });
  const {
    userSignIn: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: TYPES.ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TYPES.ORDER_DETAILS_FAIL, payload: message });
  }
};
