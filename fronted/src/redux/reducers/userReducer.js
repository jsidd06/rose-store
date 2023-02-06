import * as TYPES from "../constants/userConstants";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_SIGN_IN_REQUEST:
      return { loading: true };
    case TYPES.USER_SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_SIGN_IN_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_SIGN_OUT:
      return {};
    default:
      return state;
  }
};
