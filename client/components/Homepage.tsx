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
    <div className="container regular-page">
      <h1>Welcome</h1>
      <h2>Click the button below to start your game</h2>
      {isLoggedIn ? <h3>{username}</h3> : <></>}
      <Link to="/game">
        <button id="start-button">Play</button>
      </Link>
      <h3 className="homepage-text">
        Want to make some money at the casino? Well, you probably won't. But
        with this awesome game you can at least improve your chances of winning
        with smart play at the BlackJack table. This game will give you real
        time feedback on your decisions at the table and it records your
        statistics, so you can keep track of your progress. What are you waiting
        for? Let's play!
      </h3>
    </div>
  );
};

export default Homepage;
