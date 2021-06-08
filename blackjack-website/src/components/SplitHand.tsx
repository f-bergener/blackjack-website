import React from "react";
import RegularHand from "./RegularHand";
import { useSelector } from "react-redux";
import { State } from "../redux/reducer";

const SplitHand: React.FC = () => {
  const splitHand = useSelector((state: State) => state.splitHand);
  return RegularHand(splitHand);
};

export default SplitHand;
