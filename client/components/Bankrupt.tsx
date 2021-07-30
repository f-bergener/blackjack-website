import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { clearGameState, updateUserBankroll } from "../redux/actionCreators";

const Bankrupt: React.FC = () => {
  const dispatch = useDispatch();
  const bankroll = useSelector((state: State) => state.user.bankroll);
  return (
    <>
      <h1>You ran out of chips</h1>
      {bankroll === 0 ? (
        <button
          onClick={() => {
            dispatch(updateUserBankroll(5000));
            dispatch(clearGameState());
          }}
        >
          Reset Bankroll
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Bankrupt;
