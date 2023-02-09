import Axios from "../../Api/Axios";
import * as ENDPOINT from "../../Api/services";
import * as TYPE from "../constants/userConstants";

export const sign_in = (email, password) => async (dispatch) => {
  dispatch({ type: TYPE.USER_SIGN_IN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(ENDPOINT.SIGN_IN, { email, password });
    dispatch({ type: TYPE.USER_SIGN_IN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TYPE.USER_SIGN_IN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: TYPE.USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(ENDPOINT.REGISTER, {
      name,
      email,
      password,
    });
    dispatch({ type: TYPE.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: TYPE.USER_SIGN_IN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TYPE.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const sign_out = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: TYPE.USER_SIGN_OUT });
};
