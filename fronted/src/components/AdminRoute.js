// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, Route } from "react-router-dom";

// export default function AdminRoute({ component: Component, ...rest }) {
//   const navigate = useNavigate();
//   const userSignIn = useSelector((state) => state.userSignIn);
//   const { userInfo } = userSignIn;
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         userInfo && userInfo.isAdmin ? (
//           <Component {...props}></Component>
//         ) : (
//           navigate("/signin")
//         )
//       }
//     ></Route>
//   );
// }

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AdminRoute(props) {
  const navigate = useNavigate();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const { Components } = props;
  if (!userInfo.isAdmin) {
    navigate = "/signin";
  }
  return <Components />;
}