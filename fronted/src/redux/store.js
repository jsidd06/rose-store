import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import * as PRODUCT_REDUCERS from "./reducers/productReducers";
import * as CART_REDUCERS from "./reducers/cartReducer";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const reducer = combineReducers({
  productList: PRODUCT_REDUCERS.productListReducer,
  productDetails: PRODUCT_REDUCERS.productDetailsReducer,
  cart: CART_REDUCERS.cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
