import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import PreDealDisplay from "./PreDealDisplay";
import ActiveHandDisplay from "./ActiveHandDisplay";
import SendData from "./SendData";
import MoveFeedback from "./MoveFeedback";

const Game: React.FC = () => {
  const pot = useSelector((state: State) => state.game.pot);
  const bet = useSelector((state: State) => state.game.bet);
  const bankroll = useSelector((state: State) => state.user.bankroll);
  const playerHand = useSelector((state: State) => state.game.playerHand);

  return (
    <div className="container game">
      <h2>Bankroll: ${(bankroll - bet).toLocaleString("en")}</h2>
      <div className="container game-display">
        {playerHand.length > 0 ? <MoveFeedback /> : <></>}
        {playerHand.length === 0 ? <SendData /> : <></>}
        {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      </div>
      {/* <Link to="/">
        <button>Back to Home</button>
      </Link> */}
    </div>
  );
};

export default Game;
