import * as TYPE from "../constants/productContants";

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case TYPE.PRODUCT_LIST_REQUEST:
      return { loading: true };
    case TYPE.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case TYPE.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};