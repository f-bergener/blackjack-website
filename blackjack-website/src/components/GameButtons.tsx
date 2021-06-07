import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deal,
  hit,
  split,
  splitHit,
  splitStay,
  stay,
} from "../redux/actionCreators";

const dispatch = useDispatch();
const playerHand = useSelector((state) => state.playerHand);

export const Deal = () => {
  return (
    <button className="button deal-button" onClick={() => dispatch(deal())}>
      Deal
    </button>
  );
};

export const Hit = () => {
  if (playerHand.length >= 2 && playerCount < 21) {
    return (
      <button className="button hit-button" onClick={() => dispatch(hit())}>
        Hit
      </button>
    );
  }
};

export const Stay = () => {
  if (playerHand.length >= 2 && playerCount < 21) {
    return (
      <button className="button stay-button" onClick={() => dispatch(stay())}>
        Stay
      </button>
    );
  }
};

export const DoubleDown = () => {
  if (playerHand.length === 2 && playerCount < 21) {
    return (
      <button
        className="button double-down-button"
        onClick={() => dispatch(doubleDown())}
      >
        Double Down
      </button>
    );
  } else {
    return "";
  }
};

export const Split = () => {
  if (playerHand.length === 2) {
    return (
      <button className="button split-button" onClick={() => dispatch(split())}>
        Split
      </button>
    );
  }
};

export const SplitHit = () => {
  return (
    <button className="button hit-button" onClick={() => dispatch(splitHit())}>
      Hit
    </button>
  );
};

export const SplitStay = () => {
  return (
    <button
      className="button stay-button"
      onClick={() => dispatch(splitStay())}
    >
      Stay
    </button>
  );
};
