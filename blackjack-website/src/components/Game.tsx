import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";
import { DoubleDown, Hit, Split, Stay } from "./GameButtons";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

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

  const ActiveHandDisplay = () => {
    return (
      <>
        <h2>Bet: ${pot.toLocaleString("en")}</h2>
        {splitPot ? (
          <h2>Split Bet: ${splitPot.toLocaleString("en")}</h2>
        ) : (
          <></>
        )}
        <PlayerHand />
        <Hit />
        <Stay />
        <DoubleDown />
        <Split />
        <DealerHand />
      </>
    );
  };

  return (
    <>
      <h1>Game</h1>
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
