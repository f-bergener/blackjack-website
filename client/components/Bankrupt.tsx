import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { resetBankroll, updateUserBankroll } from "../redux/actionCreators";

const Bankrupt: React.FC = () => {
  const dispatch = useDispatch();
  const bankroll = useSelector((state: State) => state.user.bankroll);
  return (
    <>
      <h1>You ran out of chips</h1>
      {bankroll === 0 ? (
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
      )}
    </>
  );
};

export default Bankrupt;
