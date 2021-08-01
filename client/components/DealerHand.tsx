import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import cardBack from "./data/card-images/card_back.svg";
import images from "./data/card-images";
import RegularHand from "./RegularHand";

const DealerHand: React.FC = () => {
  const dealerHand = useSelector((state: State) => state.game.dealerHand);
  const stayBoolean = useSelector((state: State) => state.game.stayBoolean);
  if (dealerHand.length === 2 && stayBoolean) {
    let card = dealerHand[1];
    if (card.faceValue) {
      return (
        <div className="container card">
          <img
            className="card-back"
            src={cardBack}
            alt="Card Back"
            style={{ marginRight: "-1px" }}
          />
          <img
            className="card"
            src={images[`${card.suit}${card.faceValue}`]}
            alt={`${card.faceValue} of ${card.suit}`}
          />
        </div>
      );
    } else {
      return (
        <div className="container card">
          <img
            className="card-back"
            src={cardBack}
            alt="Card Back"
            style={{ marginRight: "-1px" }}
          />
          <img
            className="card"
            src={images[`${card.suit}${card.numberValue}`]}
            alt={`${card.numberValue} of ${card.suit}`}
          />
        </div>
      );
    }
  } else {
    return RegularHand(dealerHand);
  }
};

export default DealerHand;
