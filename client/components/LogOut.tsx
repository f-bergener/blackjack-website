import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actionCreators";
import { State } from "../redux/store";

const LogOut = () => {
  const email = useSelector((state: State) => state.user.email);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  if (email.length) {
    return <button onClick={handleClick}>Log Out</button>;
  } else {
    return <></>;
  }
};

export default LogOut;
