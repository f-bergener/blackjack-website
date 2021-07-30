import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import PreDealDisplay from "./PreDealDisplay";
import ActiveHandDisplay from "./ActiveHandDisplay";
import SendData from "./SendData";
// import { resetBankroll, updateUserBankroll } from "../redux/actionCreators";

const Game: React.FC = () => {
  const pot = useSelector((state: State) => state.game.pot);
  const bet = useSelector((state: State) => state.game.bet);
  const bankroll = useSelector((state: State) => state.user.bankroll);
  const playerHand = useSelector((state: State) => state.game.playerHand);
  // const activeGame = useSelector((state: State) => state.game.activeGame);

  // const dispatch = useDispatch();

  return (
    <>
      <h2>Bankroll: ${(bankroll - bet).toLocaleString("en")}</h2>
      {playerHand.length ? <SendData /> : <></>}
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </>
  );
};

export default Game;
