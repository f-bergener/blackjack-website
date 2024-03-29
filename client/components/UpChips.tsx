import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBet } from "../redux/actionCreators";
import { State } from "../redux/store";

const UpChips: React.FC = () => {
  const bet = useSelector((state: State) => state.game.bet);
  const bankroll = useSelector((state: State) => state.user.bankroll);
  const remainingBankroll = bankroll - bet;
  const dispatch = useDispatch();

  const displayIncreaseChips = () => {
    if (remainingBankroll >= 5000) {
      return (
        <div className="container chips increase-chips seven">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(5000))}
            style={{ borderColor: "purple" }}
          >
            $5,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(2500))}
            style={{ borderColor: "orange" }}
          >
            $2,500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 2500) {
      return (
        <div className="container chips increase-chips six">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(2500))}
            style={{ borderColor: "orange" }}
          >
            $2,500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 1000) {
      return (
        <div className="container chips increase-chips five">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1000))}
            style={{ borderColor: "red" }}
          >
            $1,000
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 500) {
      return (
        <div className="container chips increase-chips four">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(500))}
            style={{ borderColor: "blue" }}
          >
            $500
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 100) {
      return (
        <div className="container chips increase-chips three">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(100))}
            style={{ borderColor: "#2AB26A" }}
          >
            $100
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 10) {
      return (
        <div className="container chips increase-chips two">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(10))}
            style={{ borderColor: "black" }}
          >
            $10
          </div>
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    } else if (remainingBankroll >= 1) {
      return (
        <div className="container chips increase-chips one">
          <div
            className="chip"
            onClick={() => dispatch(addToBet(1))}
            style={{ borderColor: "grey" }}
          >
            $1
          </div>
        </div>
      );
    }
  };

  return <>{displayIncreaseChips()}</>;
};

export default UpChips;
