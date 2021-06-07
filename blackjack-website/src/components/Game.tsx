import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";

// When the game starts, the first components that should be displayed are
// the chips and the deal button
// Once the cards are dealt, display the card and game button components

const Game = () => {
  const pot = useSelector((state: State) => state.pot);
  const bankroll = useSelector((state: State) => state.bankroll);
  const bet = useSelector((state: State) => state.bet);
  const splitPot = useSelector((state: State) => state.splitPot);
  const playerHand = useSelector((state: State) => state.playerHand);
  const splitHand = useSelector((state: State) => state.splitHand);
  const dealerHand = useSelector((state: State) => state.dealerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  const splitCount = useSelector((state: State) => state.splitCount);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const hitBoolean = useSelector((state: State) => state.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.doubleDownBoolean
  );
  const splitBoolean = useSelector((state: State) => state.splitBoolean);
  const splitHitBoolean = useSelector((state: State) => state.splitHitBoolean);
  const splitStayBoolean = useSelector(
    (state: State) => state.splitStayBoolean
  );
  return (
    <>
      <h1>Game</h1>
      {!pot ? PreDealDisplay() : ""}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
