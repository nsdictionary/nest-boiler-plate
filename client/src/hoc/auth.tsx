import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_action";

const Auth = (
  SpecificComponent: any,
  option: boolean | null,
  adminRoute: any = null
) => {
  const AuthenticationCheck = (props: any) => {
    let user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (res.payload?.ok) {
          // logged in
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push("/");
          } else if (option === false) {
            props.history.push("/");
          }
        } else {
          // not logged in
          if (option) {
            props.history.push("/login");
          }
        }
      });
    }, [dispatch, props.history]);

    return <SpecificComponent {...props} user={user} />;
  };

  return AuthenticationCheck;
};

export default Auth;
