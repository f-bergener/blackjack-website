import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";
import ActiveHandDisplay from "./ActiveHandDisplay";
import { restartGame } from "../redux/actionCreators";

const Game: React.FC = () => {
  const pot = useSelector((state: State) => state.pot);
  const bankroll = useSelector((state: State) => state.bankroll);
  const activeGame = useSelector((state: State) => state.activeGame);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Bankroll: ${bankroll.toLocaleString("en")}</h2>
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      {activeGame ? (
        <button onClick={() => dispatch(restartGame())}>Restart Game</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Game;
