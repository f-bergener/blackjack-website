import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blackjackIncreaseBankrollReset,
  decreaseBankrollReset,
  noChangeBankrollReset,
  increaseBankrollReset,
} from "../redux/actionCreators";
import { State } from "../redux/reducer";

const UpdateBankroll = () => {
  const playerHand = useSelector((state: State) => state.playerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  const dealerCount = useSelector((state: State) => state.dealerCount);
  const hitBoolean = useSelector((state: State) => state.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.doubleDownBoolean
  );
  const splitBoolean = useSelector((state: State) => state.splitBoolean);
  const splitHitBoolean = useSelector((state: State) => state.splitHitBoolean);
  const splitStayBoolean = useSelector(
    (state: State) => state.splitStayBoolean
  );

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
  if (
    !hitBoolean &&
    !stayBoolean &&
    !doubleDownBoolean &&
    !splitBoolean &&
    !splitHitBoolean &&
    !splitStayBoolean
  ) {
    return <>{updateBankroll()}</>;
  } else {
    return <></>;
  }
};

export default UpdateBankroll;
