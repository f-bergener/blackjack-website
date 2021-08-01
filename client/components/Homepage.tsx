import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/store";
// import { restartGame } from "../redux/actionCreators";
import LogOut from "./LogOut";

const Homepage: React.FC = () => {
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  const username = useSelector((state: State) => state.user.username);
  return (
    <div className="container homepage">
      <h1>Welcome</h1>
      <h2>Click the button below to start your game</h2>
      {isLoggedIn ? <h3>{username}</h3> : <></>}
      <Link to="/game">
        <button id="start-button">Play</button>
      </Link>
    </div>
  );
};

export default Homepage;
