import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  // blackjackIncreaseBankroll,
  // noChangeBankroll,
  // increaseBankroll,
  updateBankrollAndResetHand,
  nextHand,
  updateUserBankroll,
  updateUserCorrectHands,
} from "../redux/actionCreators";
import { State } from "../redux/store";
import { won, pushed, lost } from "../redux/userReducer";

const UpdateBankroll: React.FC = () => {
  const playerHand = useSelector((state: State) => state.game.playerHand);
  const playerCount = useSelector((state: State) => state.game.playerCount);
  const dealerCount = useSelector((state: State) => state.game.dealerCount);
  const hitBoolean = useSelector((state: State) => state.game.hitBoolean);
  const stayBoolean = useSelector((state: State) => state.game.stayBoolean);
  const doubleDownBoolean = useSelector(
    (state: State) => state.game.doubleDownBoolean
  );
  const splitHand = useSelector((state: State) => state.game.splitHand);
  const bankrollUpdated = useSelector(
    (state: State) => state.game.bankrollUpdated
  );
  const pot = useSelector((state: State) => state.game.pot);
  const dispatch = useDispatch();

  const updateBankroll = () => {
    if (playerHand.length === 2) {
      if (playerCount === 21 && dealerCount !== 21) {
        if (bankrollUpdated === false) {
          console.log(pot);
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(pot * 2.5));
        }
        return (
          <>
            <h1>Blackjack</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        if (bankrollUpdated === false) {
          console.log(pot);
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(pot * 2));
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount <= 21 && dealerCount <= 21) {
        if (playerCount === dealerCount) {
          if (bankrollUpdated === false) {
            console.log(pot);
            dispatch(updateUserCorrectHands(pushed));
            dispatch(updateUserBankroll(pot));
          }
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          if (bankrollUpdated === false) {
            console.log(pot);
            dispatch(updateUserCorrectHands(won));
            dispatch(updateUserBankroll(pot * 2));
          }
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
              >
                Next Hand
              </button>
            </>
          );
        } else {
          dispatch(updateUserCorrectHands(lost));
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
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
          if (bankrollUpdated === false) {
            console.log(pot);
            dispatch(updateUserCorrectHands(pushed));
            dispatch(updateUserBankroll(pot));
          }
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          if (bankrollUpdated === false) {
            console.log(pot);
            dispatch(updateUserCorrectHands(won));
            dispatch(updateUserBankroll(pot * 2));
          }
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount < dealerCount) {
          dispatch(updateUserCorrectHands(lost));
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => {
                  dispatch(updateBankrollAndResetHand());
                  dispatch(nextHand());
                }}
              >
                Next Hand
              </button>
            </>
          );
        }
      } else if (playerCount > 21 && dealerCount < 21) {
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        if (bankrollUpdated === false) {
          console.log(pot);
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(pot * 2));
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount !== 21) {
        if (bankrollUpdated === false) {
          console.log(pot);
          dispatch(updateUserCorrectHands(won));
          dispatch(updateUserBankroll(pot * 2));
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        console.log(pot);
        dispatch(updateUserCorrectHands(lost));
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount === 21) {
        if (bankrollUpdated === false) {
          console.log(pot);
          dispatch(updateUserCorrectHands(pushed));
          dispatch(updateUserBankroll(pot));
        }
        return (
          <>
            <h1>Push</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(updateBankrollAndResetHand());
                dispatch(nextHand());
              }}
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
