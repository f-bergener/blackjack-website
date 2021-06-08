import React from "react";
import { card } from "../redux/reducer";
import clubs2 from "./data/card-images/2_of_clubs.svg";
import diamonds2 from "./data/card-images/2_of_diamonds.svg";
import hearts2 from "./data/card-images/2_of_hearts.svg";
import spades2 from "./data/card-images/2_of_spades.svg";
import clubs3 from "./data/card-images/3_of_clubs.svg";
import diamonds3 from "./data/card-images/3_of_diamonds.svg";
import hearts3 from "./data/card-images/3_of_hearts.svg";
import spades3 from "./data/card-images/3_of_spades.svg";
import clubs4 from "./data/card-images/4_of_clubs.svg";
import diamonds4 from "./data/card-images/4_of_diamonds.svg";
import hearts4 from "./data/card-images/4_of_hearts.svg";
import spades4 from "./data/card-images/4_of_spades.svg";
import clubs5 from "./data/card-images/5_of_clubs.svg";
import diamonds5 from "./data/card-images/5_of_diamonds.svg";
import hearts5 from "./data/card-images/5_of_hearts.svg";
import spades5 from "./data/card-images/5_of_spades.svg";
import clubs6 from "./data/card-images/6_of_clubs.svg";
import diamonds6 from "./data/card-images/6_of_diamonds.svg";
import hearts6 from "./data/card-images/6_of_hearts.svg";
import spades6 from "./data/card-images/6_of_spades.svg";
import clubs7 from "./data/card-images/7_of_clubs.svg";
import diamonds7 from "./data/card-images/7_of_diamonds.svg";
import hearts7 from "./data/card-images/7_of_hearts.svg";
import spades7 from "./data/card-images/7_of_spades.svg";
import clubs8 from "./data/card-images/8_of_clubs.svg";
import diamonds8 from "./data/card-images/8_of_diamonds.svg";
import hearts8 from "./data/card-images/8_of_hearts.svg";
import spades8 from "./data/card-images/8_of_spades.svg";
import clubs9 from "./data/card-images/9_of_clubs.svg";
import diamonds9 from "./data/card-images/9_of_diamonds.svg";
import hearts9 from "./data/card-images/9_of_hearts.svg";
import spades9 from "./data/card-images/9_of_spades.svg";
import clubs10 from "./data/card-images/10_of_clubs.svg";
import diamonds10 from "./data/card-images/10_of_diamonds.svg";
import hearts10 from "./data/card-images/10_of_hearts.svg";
import spades10 from "./data/card-images/10_of_spades.svg";
import clubsJ from "./data/card-images/J_of_clubs.svg";
import diamondsJ from "./data/card-images/J_of_diamonds.svg";
import heartsJ from "./data/card-images/J_of_hearts.svg";
import spadesJ from "./data/card-images/J_of_spades.svg";
import clubsQ from "./data/card-images/Q_of_clubs.svg";
import diamondsQ from "./data/card-images/Q_of_diamonds.svg";
import heartsQ from "./data/card-images/Q_of_hearts.svg";
import spadesQ from "./data/card-images/Q_of_spades.svg";
import clubsK from "./data/card-images/K_of_clubs.svg";
import diamondsK from "./data/card-images/K_of_diamonds.svg";
import heartsK from "./data/card-images/K_of_hearts.svg";
import spadesK from "./data/card-images/K_of_spades.svg";
import clubsA from "./data/card-images/A_of_clubs.svg";
import diamondsA from "./data/card-images/A_of_diamonds.svg";
import heartsA from "./data/card-images/A_of_hearts.svg";
import spadesA from "./data/card-images/A_of_spades.svg";

const images = {
  clubs2,
  diamonds2,
  hearts2,
  spades2,
  clubs3,
  diamonds3,
  hearts3,
  spades3,
  clubs4,
  diamonds4,
  hearts4,
  spades4,
  clubs5,
  diamonds5,
  hearts5,
  spades5,
  clubs6,
  diamonds6,
  hearts6,
  spades6,
  clubs7,
  diamonds7,
  hearts7,
  spades7,
  clubs8,
  diamonds8,
  hearts8,
  spades8,
  clubs9,
  diamonds9,
  hearts9,
  spades9,
  clubs10,
  diamonds10,
  hearts10,
  spades10,
  clubsJ,
  diamondsJ,
  heartsJ,
  spadesJ,
  clubsQ,
  diamondsQ,
  heartsQ,
  spadesQ,
  clubsK,
  diamondsK,
  heartsK,
  spadesK,
  clubsA,
  diamondsA,
  heartsA,
  spadesA,
};

const RegularHand = (hand: card[]) => {
  return hand.map((card: card) => {
    if (card.faceValue) {
      let src = images[];
      return (
        <img
          className="card"
          src={src}
          alt={`${card.faceValue} of ${card.suit}`}
        />
      );
    } else {
      console.log(`./data/card-images/${card.numberValue}_of_${card.suit}.svg`);
      return (
        <img
          className="card"
          src={`./data/card-images/${card.numberValue}_of_${card.suit}.svg`}
          alt={`${card.numberValue} of ${card.suit}`}
        />
      );
    }
  });
};

export default RegularHand;
