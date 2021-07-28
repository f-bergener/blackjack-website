import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actionCreators";
import { clearState } from "../redux/actionCreators";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
    dispatch(clearState());
    window.localStorage.clear();
  };
  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOut;
