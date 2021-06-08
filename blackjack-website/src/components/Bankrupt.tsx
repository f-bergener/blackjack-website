import React from "react";
import { useDispatch } from "react-redux";
import { restartGame } from "../redux/actionCreators";

const Bankrupt: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>You ran out of chips</h1>
      <div className="navigation-buttons">
        <button
          className="button restart-game-button"
          onClick={() => dispatch(restartGame())}
        >
          Restart Game
        </button>
      </div>
    </>
  );
};

export default Bankrupt;
