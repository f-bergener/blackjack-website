import React from "react";
import { useSelector } from "react-redux";

const dealerHand = useSelector((state) => state.dealerHand);

export const RegularHand = (hand) => {
  return hand.map((card) => {
    return (
      <img
        className="card"
        src={require(`./data/card-images/${card.value}_of_${card.suit}.svg`)}
        alt={card.concat}
      />
    );
  });
};

export const DealerTwoCardHand = () => {
  if (dealerHand.length === 2) {
    let card = dealerHand[1];
    return (
      <img>
        <img
          className="card-back"
          src={require("./data/card-images/card_back.svg")}
          alt="Card Back"
          style={{ marginRight: "-1px" }}
        />
        <img
          className="card"
          src={require(`./data/card-images/${card.value}_of_${card.suit}.svg`)}
          alt={card.concat}
        />
      </img>
    );
  }
};
