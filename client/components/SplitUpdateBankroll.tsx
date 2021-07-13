import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  splitIncreaseBankrollReset,
  splitDecreaseBankrollReset,
  splitNoChangeBankrollReset,
} from "../redux/actionCreators";
import { State } from "../redux/store";

const SplitUpdateBankroll: React.FC = () => {
  const splitHand = useSelector((state: State) => state.splitHand);
  const splitCount = useSelector((state: State) => state.splitCount);
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

  const splitUpdateBankroll = () => {
    if (splitHand.length === 2) {
      if (splitCount === 21 && dealerCount !== 21) {
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitIncreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount !== 21 && dealerCount === 21) {
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitDecreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount < 21 && dealerCount > 21) {
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitIncreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount <= 21 && dealerCount <= 21) {
        if (splitCount === dealerCount) {
          return (
            <>
              <h1>Push on your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitNoChangeBankrollReset())}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount > dealerCount) {
          return (
            <>
              <h1>You Win on the Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitIncreaseBankrollReset())}
              >
                Next
              </button>
            </>
          );
        } else {
          return (
            <>
              <h1>Dealer Beat your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitDecreaseBankrollReset())}
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
          return (
            <>
              <h1>Push</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitNoChangeBankrollReset())}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount > dealerCount) {
          return (
            <>
              <h1>You Win on the Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitIncreaseBankrollReset())}
              >
                Next
              </button>
            </>
          );
        } else if (splitCount < dealerCount) {
          return (
            <>
              <h1>Dealer Beat your Split Hand</h1>
              <button
                className="next-hand-button"
                onClick={() => dispatch(splitDecreaseBankrollReset())}
              >
                Next
              </button>
            </>
          );
        }
      } else if (splitCount > 21 && dealerCount < 21) {
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitDecreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount < 21 && dealerCount > 21) {
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitIncreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount === 21 && dealerCount !== 21) {
        return (
          <>
            <h1>You Win on the Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitIncreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount !== 21 && dealerCount === 21) {
        return (
          <>
            <h1>Dealer Beat your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitDecreaseBankrollReset())}
            >
              Next
            </button>
          </>
        );
      } else if (splitCount === 21 && dealerCount === 21) {
        return (
          <>
            <h1>Push on your Split Hand</h1>
            <button
              className="next-hand-button"
              onClick={() => dispatch(splitDecreaseBankrollReset())}
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
