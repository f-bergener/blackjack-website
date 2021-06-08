import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import cardBack from "./data/card-images/card_back.svg";
import images from "./data/card-images";
import RegularHand from "./RegularHand";

const DealerHand: React.FC = () => {
  const dealerHand = useSelector((state: State) => state.dealerHand);
  if (dealerHand.length === 2) {
    let card = dealerHand[1];
    if (card.faceValue) {
      return (
        <>
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
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  } else {
    return RegularHand(dealerHand);
  }
};

export default DealerHand;
