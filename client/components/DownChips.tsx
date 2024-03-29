import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBet } from "../redux/actionCreators";
import { State } from "../redux/store";

const DownChips: React.FC = () => {
  const bet = useSelector((state: State) => state.game.bet);
  const dispatch = useDispatch();

  const displayDecreaseChips = () => {
    if (bet >= 5000) {
      return (
        <div className="container chips decrease-chips seven">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(5000))}
            style={{ borderColor: "purple" }}
          >
            $5,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(2500))}
            style={{ borderColor: "orange" }}
          >
            $2,500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 2500) {
      return (
        <div className="container chips decrease-chips six">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(2500))}
            style={{ borderColor: "orange" }}
          >
            $2,500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 1000) {
      return (
        <div className="container chips decrease-chips five">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 500) {
      return (
        <div className="container chips decrease-chips four">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 100) {
      return (
        <div className="container chips decrease-chips three">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 10) {
      return (
        <div className="container chips decrease-chips two">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (bet >= 1) {
      return (
        <div className="container chips decrease-chips one">
          <div
            className="chip"
            onClick={() => dispatch(removeFromBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    }
  };

  return <>{displayDecreaseChips()}</>;
};

export default DownChips;
