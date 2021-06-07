import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducer";
import UpChips from "./UpChips";
import DownChips from "./DownChips";

// When the game starts, the first components that should be displayed are
// the chips and the deal button

const Game = () => {
  const bankroll = useSelector((state: State) => state.bankroll);
  const pot = useSelector((state: State) => state.pot);
  const bet = useSelector((state: State) => state.bet);
  const preDealDisplay = () => {
    return (
      <>
        <h2>Bankroll: {bankroll.toLocaleString("en")}</h2>
        {bankroll > 0 && pot === 0 ? (
          <>
            <h2>Increase Bet</h2> <UpChips />
          </>
        ) : (
          ""
        )}
        {bet > 0 && pot === 0 ? (
          <>
            <h2>Lower Bet</h2> <DownChips />
          </>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <>
      <h1>Game</h1>
      {preDealDisplay()}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
