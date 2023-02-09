import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import * as PRODUCT_REDUCERS from "./reducers/productReducers";
import * as CART_REDUCERS from "./reducers/cartReducer";
import * as USER_REDUCERS from "./reducers/userReducer";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
  },
};
const reducer = combineReducers({
  productList: PRODUCT_REDUCERS.productListReducer,
  productDetails: PRODUCT_REDUCERS.productDetailsReducer,
  cart: CART_REDUCERS.cartReducer,
  userSignIn: USER_REDUCERS.userSignInReducer,
  userRegister: USER_REDUCERS.userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
