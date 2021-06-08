import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";

const DealerTwoCardHand = () => {
  const dealerHand = useSelector((state: State) => state.dealerHand);
  if (dealerHand.length === 2) {
    let card = dealerHand[1];
    return (
      <>
        <img
          className="card-back"
          src={require("../../public/card-images/card_back.svg")}
          alt="Card Back"
          style={{ marginRight: "-1px" }}
        />
        <img
          className="card"
          src={require(`../../public/card-images/${card.faceValue}_of_${card.suit}`)}
          alt={card.faceValue}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export default DealerTwoCardHand;
