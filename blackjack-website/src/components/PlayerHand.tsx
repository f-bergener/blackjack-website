import React from "react";
import RegularHand from "./RegularHand";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";

const PlayerHand = () => {
  const playerHand = useSelector((state: State) => state.playerHand);
  return RegularHand(playerHand);
};

export default PlayerHand;
