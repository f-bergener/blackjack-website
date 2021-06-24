import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/reducer";
import { restartGame } from "../redux/actionCreators";

const Homepage: React.FC = () => {
  const activeGame = useSelector((state: State) => state.activeGame);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Welcome</h1>
      <h2>Click the button below to start your game</h2>
      {activeGame ? (
        <>
          <Link to="/game">
            <button id="start-button">Continue Game</button>
          </Link>
          <Link to="/game">
            <button id="start-button" onClick={() => dispatch(restartGame())}>
              Restart Game
            </button>
          </Link>
        </>
      ) : (
        <Link to="/game">
          <button id="start-button">Start Game</button>
        </Link>
      )}
    </>
  );
};

export default Homepage;
