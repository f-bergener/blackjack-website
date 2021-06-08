import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";
import { card } from "../redux/reducer";

// export const RegularHand = (hand: card[]) => {
//   return hand.map((card: card) => {
//     return card.faceValue ? (
//       <img
//         className="card"
//         src={require(`../../public/card-images/${card.faceValue}_of_${card.suit}.svg`)}
//         alt={`${card.faceValue} of ${card.suit}`}
//       />
//     ) : (
//       <img
//         className="card"
//         src={require(`../../public/card-images/${card.numberValue}_of_${card.suit}.svg`)}
//         alt={`${card.numberValue} of ${card.suit}`}
//       />
//     );
//   });
// };

const RegularHand = (hand: card[]) => {
  return hand.map((card: card) => {
    if (card.faceValue) {
      return (
        <img
          className="card"
          src={require(`../../public/card-images/${card.faceValue}_of_${card.suit}.svg`)}
          alt={`${card.faceValue} of ${card.suit}`}
        />
      );
    } else {
      return (
        <img
          className="card"
          src={require(`../../public/card-images/${card.numberValue}_of_${card.suit}.svg`)}
          alt={`${card.numberValue} of ${card.suit}`}
        />
      );
    }
  });
};

// export const DealerTwoCardHand = () => {
//   const dealerHand = useSelector((state: State) => state.dealerHand);
//   if (dealerHand.length === 2) {
//     let card = dealerHand[1];
//     return (
//       <>
//         <img
//           className="card-back"
//           src={require("../../public/card-images/card_back.svg")}
//           alt="Card Back"
//           style={{ marginRight: "-1px" }}
//         />
//         <img
//           className="card"
//           src={require(`../../public/card-images/${card.faceValue}_of_${card.suit}.svg`)}
//           alt={card.faceValue}
//         />
//       </>
//     );
//   }
// };

export default RegularHand;
