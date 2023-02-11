import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const navigate = useNavigate();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? <Component {...props}></Component> : navigate("/signin")
      }
    ></Route>
  );
}
