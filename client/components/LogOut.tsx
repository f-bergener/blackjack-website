import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actionCreators";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
    window.localStorage.clear();
  };
  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOut;
