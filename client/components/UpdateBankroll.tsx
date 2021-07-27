import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  blackjackIncreaseBankroll,
  // decreaseBankroll,
  noChangeBankroll,
  increaseBankroll,
  nextHand,
} from "../redux/actionCreators";
import { State } from "../redux/store";

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

  const dispatch = useDispatch();

  const updateBankroll = () => {
    if (playerHand.length === 2) {
      if (playerCount === 21 && dealerCount !== 21) {
        if (bankrollUpdated === false) {
          dispatch(blackjackIncreaseBankroll());
        }
        return (
          <>
            <h1>Blackjack</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        // dispatch(decreaseBankroll());
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => {
                dispatch(nextHand());
              }}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        if (bankrollUpdated === false) {
          dispatch(increaseBankroll());
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount <= 21 && dealerCount <= 21) {
        if (playerCount === dealerCount) {
          if (bankrollUpdated === false) {
            dispatch(noChangeBankroll());
          }
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          if (bankrollUpdated === false) {
            dispatch(increaseBankroll());
          }
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
              >
                Next Hand
              </button>
            </>
          );
        } else {
          // dispatch(decreaseBankroll())
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
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
            dispatch(noChangeBankroll());
          }
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount > dealerCount) {
          if (bankrollUpdated === false) {
            dispatch(increaseBankroll());
          }
          return (
            <>
              <h1>You Win</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
              >
                Next Hand
              </button>
            </>
          );
        } else if (playerCount < dealerCount) {
          // dispatch(decreaseBankroll());
          return (
            <>
              <h1>Dealer Wins</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(nextHand())}
              >
                Next Hand
              </button>
            </>
          );
        }
      } else if (playerCount > 21 && dealerCount < 21) {
        // dispatch(decreaseBankroll())
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount < 21 && dealerCount > 21) {
        if (bankrollUpdated === false) {
          dispatch(increaseBankroll());
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount !== 21) {
        if (bankrollUpdated === false) {
          dispatch(increaseBankroll());
        }
        return (
          <>
            <h1>You Win</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount !== 21 && dealerCount === 21) {
        // dispatch(decreaseBankroll());
        return (
          <>
            <h1>Dealer Wins</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
            >
              Next Hand
            </button>
          </>
        );
      } else if (playerCount === 21 && dealerCount === 21) {
        // dispatch(decreaseBankroll());
        return (
          <>
            <h1>Push</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(nextHand())}
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
