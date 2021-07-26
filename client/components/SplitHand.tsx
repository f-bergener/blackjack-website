import React from "react";
import RegularHand from "./RegularHand";
import { useSelector } from "react-redux";
import { State } from "../redux/store";

const SplitHand: React.FC = () => {
  const splitHand = useSelector((state: State) => state.game.splitHand);
  return RegularHand(splitHand);
};

export default SplitHand;
