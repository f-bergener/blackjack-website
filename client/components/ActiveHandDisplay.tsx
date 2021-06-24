import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
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

const ActiveHandDisplay: React.FC = () => {
  const pot = useSelector((state: State) => state.pot);
  const splitPot = useSelector((state: State) => state.splitPot);
  const playerCount = useSelector((state: State) => state.playerCount);
  const splitCount = useSelector((state: State) => state.splitCount);
  const splitHand = useSelector((state: State) => state.splitHand);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const playerHandBestMove = useSelector(
    (state: State) => state.playerHandBestMove
  );
  const splitHandBestMove = useSelector(
    (state: State) => state.splitHandBestMove
  );
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  const correctMoves = useSelector((state: State) => state.correctMoves);
  const totalMoves = useSelector((state: State) => state.totalMoves);
  const handsWon = useSelector((state: State) => state.handsWon);
  const totalHands = useSelector((state: State) => state.totalHands);
  return (
    <>
      <h2>
        Accuracy:{" "}
        {`${correctMoves}/${totalMoves} / ${
          totalMoves ? Math.ceil((correctMoves / totalMoves) * 100) : "0"
        }%`}
      </h2>
      <h2>
        Winning %:{" "}
        {`${handsWon}/${totalHands} / ${
          totalHands ? Math.ceil((handsWon / totalHands) * 100) : "0"
        }%`}
      </h2>
      <h2>Bet: ${pot.toLocaleString("en")}</h2>
      {splitPot ? <h2>Split Bet: ${splitPot.toLocaleString("en")}</h2> : <></>}
      <PlayerHand />
      <h2>Player Count: {playerCount}</h2>
      <Hit />
      <Stay />
      <DoubleDown />
      <Split />
      {playerHandBestMove ? <h1>{playerHandBestMove}</h1> : <></>}
      <SplitHand />
      <h2>{splitHand.length >= 2 ? `Split Count: ${splitCount}` : <></>}</h2>
      <SplitHit />
      <SplitStay />
      {splitHandBestMove ? <h1>{splitHandBestMove}</h1> : <></>}
      <DealerHand />
      <h2>{!stayBoolean ? `Dealer Count: ${dealerCount}` : <></>}</h2>
      <UpdateBankroll />
      <SplitUpdateBankroll />
    </>
  );
};

export default ActiveHandDisplay;