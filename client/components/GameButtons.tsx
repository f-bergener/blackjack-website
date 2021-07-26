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
import { State } from "../redux/store";

export const Deal: React.FC = () => {
  const dispatch = useDispatch();
  const totalMoves = useSelector((state: State) => state.game.totalMoves);
  return (
    <button
      className="button deal-button"
      onClick={() => {
        dispatch(deal());
        console.log(totalMoves);
      }}
    >
      Deal
    </button>
  );
};

export const Hit: React.FC = () => {
  const dispatch = useDispatch();
  const hitBoolean = useSelector((state: State) => state.game.hitBoolean);
  const splitStayBoolean = useSelector(
    (state: State) => state.game.splitStayBoolean
  );
  // Checking if the player has an active split hand since I want the player to complete their split hand before moving forward
  if (hitBoolean && !splitStayBoolean) {
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
  const stayBoolean = useSelector((state: State) => state.game.stayBoolean);
  const splitStayBoolean = useSelector(
    (state: State) => state.game.splitStayBoolean
  );
  // Checking if the player has an active split hand since I want the player to complete their split hand before moving forward
  if (stayBoolean && !splitStayBoolean) {
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
    (state: State) => state.game.doubleDownBoolean
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
  const splitBoolean = useSelector((state: State) => state.game.splitBoolean);
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
  const splitHitBoolean = useSelector(
    (state: State) => state.game.splitHitBoolean
  );
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
    (state: State) => state.game.splitStayBoolean
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
