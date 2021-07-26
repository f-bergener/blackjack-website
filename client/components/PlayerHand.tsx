import React from "react";
import RegularHand from "./RegularHand";
import { useSelector } from "react-redux";
import { State } from "../redux/store";

const PlayerHand: React.FC = () => {
  const playerHand = useSelector((state: State) => state.game.playerHand);
  return RegularHand(playerHand);
};

export default PlayerHand;
