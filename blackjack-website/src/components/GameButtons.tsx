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

export const Deal: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <button className="button deal-button" onClick={() => dispatch(deal())}>
      Deal
    </button>
  );
};

export const Hit: React.FC = () => {
  const dispatch = useDispatch();
  const hitBoolean = useSelector((state: State) => state.hitBoolean);
  if (hitBoolean) {
    return (
      <button className="button hit-button" onClick={() => dispatch(hit())}>
        Hit
      </button>
    );
  } else {
    return <></>;
  }
};

export const Stay: React.FC = () => {
  const dispatch = useDispatch();
  const stayBoolean = useSelector((state: State) => state.stayBoolean);
  if (stayBoolean) {
    return (
      <button className="button stay-button" onClick={() => dispatch(stay())}>
        Stay
      </button>
    );
  } else {
    return <></>;
  }
};

export const DoubleDown: React.FC = () => {
  const dispatch = useDispatch();
  const doubleDownBoolean = useSelector(
    (state: State) => state.doubleDownBoolean
  );
  if (doubleDownBoolean) {
    return (
      <button
        className="button double-down-button"
        onClick={() => dispatch(doubleDown())}
      >
        Double Down
      </button>
    );
  } else {
    return <></>;
  }
};

export const Split: React.FC = () => {
  const dispatch = useDispatch();
  const splitBoolean = useSelector((state: State) => state.splitBoolean);
  if (splitBoolean) {
    return (
      <button className="button split-button" onClick={() => dispatch(split())}>
        Split
      </button>
    );
  } else {
    return <></>;
  }
};

export const SplitHit: React.FC = () => {
  const dispatch = useDispatch();
  const splitHitBoolean = useSelector((state: State) => state.splitHitBoolean);
  if (splitHitBoolean) {
    return (
      <button
        className="button hit-button"
        onClick={() => dispatch(splitHit())}
      >
        Hit
      </button>
    );
  } else {
    return <></>;
  }
};

export const SplitStay: React.FC = () => {
  const dispatch = useDispatch();
  const splitStayBoolean = useSelector(
    (state: State) => state.splitStayBoolean
  );
  if (splitStayBoolean) {
    return (
      <button
        className="button stay-button"
        onClick={() => dispatch(splitStay())}
      >
        Stay
      </button>
    );
  } else {
    return <></>;
  }
};
