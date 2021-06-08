import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import PreDealDisplay from "./PreDealDisplay";
import {
  DoubleDown,
  Hit,
  Split,
  SplitHit,
  SplitStay,
  Stay,
} from "./GameButtons";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";
import UpdateBankroll from "./UpdateBankroll";
import SplitUpdateBankroll from "./SplitUpdateBankroll";
import SplitHand from "./SplitHand";

const Game = () => {
  const pot = useSelector((state: State) => state.pot);
  const bankroll = useSelector((state: State) => state.bankroll);
  const splitPot = useSelector((state: State) => state.splitPot);
  const playerCount = useSelector((state: State) => state.playerCount);
  const splitCount = useSelector((state: State) => state.splitCount);
  const splitHand = useSelector((state: State) => state.splitHand);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const dealerHand = useSelector((state: State) => state.dealerHand);

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
        <h2>Player Count: {playerCount}</h2>
        <Hit />
        <Stay />
        <DoubleDown />
        <Split />
        <SplitHand />
        <h2>{splitHand.length > 2 ? `Split Count: ${splitCount}` : <></>}</h2>
        <SplitHit />
        <SplitStay />
        <h2>
          {dealerHand.length > 2 ? `Dealer Count: ${dealerCount}` : <></>}
        </h2>
        <DealerHand />
        <UpdateBankroll />
        <SplitUpdateBankroll />
      </>
    );
  };

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
