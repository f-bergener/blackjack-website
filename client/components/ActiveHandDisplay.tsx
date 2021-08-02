import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
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
  const pot = useSelector((state: State) => state.game.pot);
  const splitPot = useSelector((state: State) => state.game.splitPot);
  const playerCount = useSelector((state: State) => state.game.playerCount);
  const splitCount = useSelector((state: State) => state.game.splitCount);
  const splitHand = useSelector((state: State) => state.game.splitHand);
  const dealerCount = useSelector((state: State) => state.game.dealerCount);
  const playerHandBestMove = useSelector(
    (state: State) => state.game.playerHandBestMove
  );
  const splitHandBestMove = useSelector(
    (state: State) => state.game.splitHandBestMove
  );
  const stayBoolean = useSelector((state: State) => state.game.stayBoolean);
  const username = useSelector((state: State) => state.user.username);

  return (
    <>
      <h2>Bet: ${pot.toLocaleString("en")}</h2>
      {splitPot ? <h2>Split Bet: ${splitPot.toLocaleString("en")}</h2> : <></>}
      <div className="container active-hand">
        <div className="container hand">
          <PlayerHand />
          <h2 className="count-text">
            {username}'s Count: {playerCount}
          </h2>
          <div className="container game-buttons">
            <Hit />
            <Stay />
            <DoubleDown />
            <Split />
          </div>
        </div>
        <div className="container hand">
          <SplitHand />
          <h2 className="count-text">
            {splitHand.length >= 2 ? `Split Count: ${splitCount}` : <></>}
          </h2>
          <div className="container game-buttons">
            <SplitHit />
            <SplitStay />
          </div>
        </div>
        <div className="container hand">
          <DealerHand />
          <h2 className="count-text">
            {!stayBoolean ? `Dealer Count: ${dealerCount}` : <></>}
          </h2>
        </div>
      </div>
      <UpdateBankroll />
      <SplitUpdateBankroll />
    </>
  );
};

export default ActiveHandDisplay;
