import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { State } from "../redux/store";
import { TOKEN } from "../redux/userReducer";

const SendData = () => {
  const correctMoves = useSelector((state: State) => state.user.correctMoves);
  const handsWon = useSelector((state: State) => state.user.handsWon);
  const handsPushed = useSelector((state: State) => state.user.handsPushed);
  const totalHands = useSelector((state: State) => state.user.totalHands);
  const totalMoves = useSelector((state: State) => state.user.totalMoves);
  const bankroll = useSelector((state: State) => state.user.bankroll);
  const token = window.localStorage.getItem(TOKEN);

  if (token) {
    if (token.length) {
      return (
        <button
          onClick={() => {
            try {
              axios.put(
                "/api/users",
                {
                  bankroll,
                  correctMoves,
                  handsWon,
                  handsPushed,
                  totalHands,
                  totalMoves,
                },
                {
                  headers: {
                    authorization: token,
                  },
                }
              );
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Save Progress
        </button>
      );
    }
  } else {
    return <></>;
  }
};

export default SendData;
