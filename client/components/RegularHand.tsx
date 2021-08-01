import React from "react";
import images from "./data/card-images";
import { card } from "./data/getDeck";

const RegularHand: React.FC<card[]> = (hand: card[]) => {
  return (
    <div className="container card">
      {hand.map((card: card) => {
        if (card.faceValue) {
          return (
            <img
              key={card.id}
              className="card"
              src={images[`${card.suit}${card.faceValue}`]}
              alt={`${card.faceValue} of ${card.suit}`}
            />
          );
        } else {
          return (
            <img
              key={card.id}
              className="card"
              src={images[`${card.suit}${card.numberValue}`]}
              alt={`${card.numberValue} of ${card.suit}`}
            />
          );
        }
      })}
    </div>
  );
};

export default RegularHand;
