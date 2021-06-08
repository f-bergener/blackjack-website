import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import UpChips from "./UpChips";
import DownChips from "./DownChips";
import { Deal } from "./GameButtons";

const PreDealDisplay = () => {
  const bankroll = useSelector((state: State) => state.bankroll);
  const pot = useSelector((state: State) => state.pot);
  const bet = useSelector((state: State) => state.bet);
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
      {bet ? Deal() : <></>}
    </>
  );
};

export default PreDealDisplay;
