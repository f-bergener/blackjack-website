import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blackjackIncreaseBankrollReset,
  decreaseBankrollReset,
  noChangeBankrollReset,
  increaseBankrollReset,
} from "../redux/actionCreators";
import { State } from "../redux/store";

const UpdateBankroll: React.FC = () => {
  const playerHand = useSelector((state: State) => state.playerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const hitBoolean = useSelector((state: State) => state.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.doubleDownBoolean
  );
  const splitHand = useSelector((state: State) => state.splitHand);

  const dispatch = useDispatch();

  const updateBankroll = () => {
    if (playerHand.length === 2) {
      if (playerCount === 21 && dealerCount !== 21) {
        return (
          <>
            <h1>Blackjack</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(blackjackIncreaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(decreaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(increaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount <= 21 && dealerCount <= 21) {
        if (playerCount === dealerCount) {
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(noChangeBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(increaseBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        } else {
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(decreaseBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        }
      }
    } else if (playerHand.length > 2) {
      if (playerCount < 21 && dealerCount < 21) {
        if (playerCount === dealerCount) {
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(noChangeBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(increaseBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount < dealerCount) {
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(decreaseBankrollReset())}
              >
                Next Hand
              </button>
            </>
          );
        }
      } else if (playerCount > 21 && dealerCount < 21) {
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(decreaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(increaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount !== 21) {
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(increaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(decreaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount === 21) {
        return (
          <>
            <h1>Push</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(decreaseBankrollReset())}
            >
              Next Hand
            </button>
          </>
        );
      }
    }
  };
  if (!hitBoolean && !stayBoolean && !doubleDownBoolean && !splitHand.length) {
    return <>{updateBankroll()}</>;
  } else {
    return <></>;
  }
};

export default UpdateBankroll;
