import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/actionCreators";
import { clearGameState, clearUserState } from "../redux/actionCreators";
import { TOKEN } from "../redux/userReducer";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
    dispatch(clearGameState());
    dispatch(clearUserState());
    window.localStorage.removeItem(TOKEN);
  };
  return <button onClick={handleClick}>Log Out</button>;
};

export default LogOut;
