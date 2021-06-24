import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import UpChips from "./UpChips";
import DownChips from "./DownChips";
import { Deal } from "./GameButtons";
import Bankrupt from "./Bankrupt";

const PreDealDisplay: React.FC = () => {
  const bankroll = useSelector((state: State) => state.bankroll);
  const pot = useSelector((state: State) => state.pot);
  const bet = useSelector((state: State) => state.bet);
  const total = bankroll + bet + pot;
  return (
    <>
      {!total ? (
        <Bankrupt />
      ) : (
        <>
          <h2>Bet: ${bet.toLocaleString()}</h2>
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
          {bet ? <Deal /> : <></>}
        </>
      )}
    </>
  );
};

export default PreDealDisplay;