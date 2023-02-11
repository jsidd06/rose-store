import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SellerRoute(props) {
  const navigate = useNavigate();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const { Components } = props;
  if (!userInfo.isAdmin) {
    navigate = "/signin";
  }
  return <Components />;
}
