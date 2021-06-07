import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deal,
  doubleDown,
  hit,
  split,
  splitHit,
  splitStay,
  stay,
} from "../redux/actionCreators";
import { State } from "../redux/reducer";

export const Deal = () => {
  const dispatch = useDispatch();
  return (
    <button className="button deal-button" onClick={() => dispatch(deal())}>
      Deal
    </button>
  );
};

export const Hit = () => {
  const dispatch = useDispatch();
  const playerHand = useSelector((state: State) => state.playerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  if (playerHand.length >= 2 && playerCount < 21) {
    return (
      <button className="button hit-button" onClick={() => dispatch(hit())}>
        Hit
      </button>
    );
  }
};

export const Stay = () => {
  const dispatch = useDispatch();
  const playerHand = useSelector((state: State) => state.playerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
  if (playerHand.length >= 2 && playerCount < 21) {
    return (
      <button className="button stay-button" onClick={() => dispatch(stay())}>
        Stay
      </button>
    );
  }
};

export const DoubleDown = () => {
  const dispatch = useDispatch();
  const playerHand = useSelector((state: State) => state.playerHand);
  const playerCount = useSelector((state: State) => state.playerCount);
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
  const dispatch = useDispatch();
  const playerHand = useSelector((state: State) => state.playerHand);
  if (playerHand.length === 2) {
    return (
      <button className="button split-button" onClick={() => dispatch(split())}>
        Split
      </button>
    );
  }
};

export const SplitHit = () => {
  const dispatch = useDispatch();
  return (
    <button className="button hit-button" onClick={() => dispatch(splitHit())}>
      Hit
    </button>
  );
};

export const SplitStay = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="button stay-button"
      onClick={() => dispatch(splitStay())}
    >
      Stay
    </button>
  );
};
