import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  splitBankrollUpdate,
  splitNextHand,
  updateUserBankroll,
  updateUserCorrectHands,
} from "../redux/actionCreators";
import { State } from "../redux/store";
import { won, pushed, lost } from "../redux/userReducer";

const SplitUpdateBankroll: React.FC = () => {
  const splitHand = useSelector((state: State) => state.game.splitHand);
  const splitCount = useSelector((state: State) => state.game.splitCount);
  const dealerCount = useSelector((state: State) => state.game.dealerCount);
  const hitBoolean = useSelector((state: State) => state.game.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.game.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.game.doubleDownBoolean
  );
  const splitBoolean = useSelector((state: State) => state.game.splitBoolean);
  const splitHitBoolean = useSelector(
    (state: State) => state.game.splitHitBoolean
  );
  const splitStayBoolean = useSelector(
    (state: State) => state.game.splitStayBoolean
  );
  const splitPot = useSelector((state: State) => state.game.splitPot);
  const splitBankrollUpdated = useSelector(
    (state: State) => state.game.splitBankrollUpdated
  );
  const dispatch = useDispatch();

  const splitUpdateBankroll = () => {
    if (splitHand.length === 2) {
      if (splitCount === 21 && dealerCount !== 21) {
        if (splitBankrollUpdated === false) {
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(splitPot * 2));
          dispatch(splitBankrollUpdate());
        }
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount !== 21 && dealerCount === 21) {
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount < 21 && dealerCount > 21) {
        if (splitBankrollUpdated === false) {
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(splitPot * 2));
          dispatch(splitBankrollUpdate());
        }
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount <= 21 && dealerCount <= 21) {
        if (splitCount === dealerCount) {
          if (splitBankrollUpdated === false) {
            dispatch(updateUserCorrectHands(pushed));
            dispatch(updateUserBankroll(splitPot));
            dispatch(splitBankrollUpdate());
          }
          return (
            <>
              <h1>Push on your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount > dealerCount) {
          if (splitBankrollUpdated === false) {
            dispatch(updateUserCorrectHands(won));
            dispatch(updateUserBankroll(splitPot * 2));
            dispatch(splitBankrollUpdate());
          }
          return (
            <>
              <h1>You Win on the Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        } else {
          dispatch(updateUserCorrectHands(lost));
          return (
            <>
              <h1>Dealer Beat your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        }
      }
    } else if (splitHand.length > 2) {
      if (splitCount < 21 && dealerCount < 21) {
        if (splitCount === dealerCount) {
          if (splitBankrollUpdated === false) {
            dispatch(updateUserCorrectHands(pushed));
            dispatch(updateUserBankroll(splitPot));
            dispatch(splitBankrollUpdate());
          }
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount > dealerCount) {
          if (splitBankrollUpdated === false) {
            dispatch(updateUserCorrectHands(won));
            dispatch(updateUserBankroll(splitPot * 2));
            dispatch(splitBankrollUpdate());
          }
          return (
            <>
              <h1>You Win on the Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount < dealerCount) {
          dispatch(updateUserCorrectHands(lost));
          return (
            <>
              <h1>Dealer Beat your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(splitNextHand());
                }}
              >
                Next
              </button>
            </>
          );
        }
      } else if (splitCount > 21 && dealerCount < 21) {
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount < 21 && dealerCount > 21) {
        if (splitBankrollUpdated === false) {
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(splitPot * 2));
          dispatch(splitBankrollUpdate());
        }
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount === 21 && dealerCount !== 21) {
        if (splitBankrollUpdated === false) {
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(splitPot * 2));
          dispatch(splitBankrollUpdate());
        }
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount !== 21 && dealerCount === 21) {
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount === 21 && dealerCount === 21) {
        if (splitBankrollUpdated === false) {
          dispatch(updateUserCorrectHands(pushed));
          dispatch(updateUserBankroll(splitPot));
          dispatch(splitBankrollUpdate());
        }
        return (
          <>
            <h1>Push on your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(splitNextHand());
              }}
            >
              Next
            </button>
          </>
        );
      }
    } else {
      return <></>;
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
    return <>{splitUpdateBankroll()}</>;
  } else {
    return <></>;
  }
};

export default SplitUpdateBankroll;
