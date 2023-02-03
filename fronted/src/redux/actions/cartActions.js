import Axios from "../../Api/Axios";
import * as TYPE from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  dispatch({
    type: TYPE.CART_ITEM_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: TYPE.CART_ITEM_ADD,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({
      type: TYPE.CART_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
