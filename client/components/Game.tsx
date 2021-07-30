import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { State } from "../redux/store";
import PreDealDisplay from "./PreDealDisplay";
import ActiveHandDisplay from "./ActiveHandDisplay";
import { TOKEN } from "../redux/userReducer";
// import { resetBankroll, updateUserBankroll } from "../redux/actionCreators";

const Game: React.FC = () => {
  const pot = useSelector((state: State) => state.game.pot);
  const bet = useSelector((state: State) => state.game.bet);
  const bankroll = useSelector((state: State) => state.user.bankroll);
  // const correctMoves = useSelector((state: State) => state.user.correctMoves);
  // const handsWon = useSelector((state: State) => state.user.handsWon);
  // const handsPushed = useSelector((state: State) => state.user.handsPushed);
  // const totalHands = useSelector((state: State) => state.user.totalHands);
  // const totalMoves = useSelector((state: State) => state.user.totalMoves);

  const token = window.localStorage.getItem(TOKEN);
  // const activeGame = useSelector((state: State) => state.game.activeGame);

  // const dispatch = useDispatch();

  // const sendData = () => {
  // try {
  // axios.put(
  // "/api/users",
  // {
  // bankroll,
  // correctMoves,
  // handsWon,
  // handsPushed,
  // totalHands,
  // totalMoves,
  // },
  // {
  // headers: {
  // authorization: token,
  // },
  // }
  // );
  // } catch (error) {
  // console.error(error);
  // }
  // };

  return (
    <>
      <h2>Bankroll: ${(bankroll - bet).toLocaleString("en")}</h2>
      {/* {token ? (
        token.length ? (
          <button onClick={sendData}>Save Progress</button>
        ) : (
          <></>
        )
      ) : (
        <></>
      )} */}
      {!pot ? <PreDealDisplay /> : <ActiveHandDisplay />}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      {/* {activeGame ? (
        <button
          onClick={() => {
            dispatch(resetBankroll());
            dispatch(updateUserBankroll(false));
          }}
        >
          Reset Bankroll
        </button>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default Game;
