import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";
import ActiveHandDisplay from "./ActiveHandDisplay";

const Game: React.FC = () => {
  const pot = useSelector((state: State) => state.pot);
  const bankroll = useSelector((state: State) => state.bankroll);

  return (
    <>
      <h1>Game</h1>
      <h2>Bankroll: ${bankroll.toLocaleString("en")}</h2>
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
