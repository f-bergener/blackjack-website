import React from "react";
import images from "./data/card-images";
import { card } from "./data/getDeck";

const RegularHand = (hand: card[]) => {
  return hand.map((card: card) => {
    if (card.faceValue) {
      return (
        <img
          className="card"
          src={images[`${card.suit}${card.faceValue}`]}
          alt={`${card.faceValue} of ${card.suit}`}
        />
      );
    } else {
      console.log(`./data/card-images/${card.numberValue}_of_${card.suit}.svg`);
      return (
        <img
          className="card"
          src={images[`${card.suit}${card.numberValue}`]}
          alt={`${card.numberValue} of ${card.suit}`}
        />
      );
    }
  });
};

export default RegularHand;
