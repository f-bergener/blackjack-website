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
  postDealUpdate,
  postMoveUpdate,
  postSplitUpdate,
  updateUserBankroll,
} from "../redux/actionCreators";
import { ActionConstants } from "../redux/actionConstants";
import { State } from "../redux/store";

export const Deal: React.FC = () => {
  const dispatch = useDispatch();
  const bankroll = useSelector((state: State) => state.user.bankroll);
  const bet = useSelector((state: State) => state.game.bet);
  return (
    <button
      className="button hit-button"
      onClick={() => {
        dispatch(postDealUpdate());
        dispatch(updateUserBankroll(-bet));
        dispatch(deal(bankroll));
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
  const playerHandBestMove = useSelector(
    (state: State) => state.game.playerHandBestMove
  );
  // Checking if the player has an active split hand since I want the player to complete their split hand before moving forward
  if (hitBoolean && !splitStayBoolean) {
    return (
      <button
        className="button hit-button"
        onClick={() => {
          if (playerHandBestMove === ActionConstants.HIT) {
            dispatch(
              postMoveUpdate(true, ActionConstants.HIT, playerHandBestMove)
            );
          } else {
            dispatch(
              postMoveUpdate(false, ActionConstants.HIT, playerHandBestMove)
            );
          }
          dispatch(hit());
        }}
      >
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
  const playerHandBestMove = useSelector(
    (state: State) => state.game.playerHandBestMove
  );
  // Checking if the player has an active split hand since I want the player to complete their split hand before moving forward
  if (stayBoolean && !splitStayBoolean) {
    return (
      <button
        className="button stay-button"
        onClick={() => {
          if (playerHandBestMove === ActionConstants.STAY) {
            dispatch(
              postMoveUpdate(true, ActionConstants.STAY, playerHandBestMove)
            );
          } else {
            dispatch(
              postMoveUpdate(false, ActionConstants.STAY, playerHandBestMove)
            );
          }
          dispatch(stay());
        }}
      >
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
  const playerHandBestMove = useSelector(
    (state: State) => state.game.playerHandBestMove
  );
  const pot = useSelector((state: State) => state.game.pot);
  if (doubleDownBoolean) {
    return (
      <button
        className="button double-down-button"
        onClick={() => {
          if (playerHandBestMove === ActionConstants.DOUBLE_DOWN) {
            dispatch(
              postMoveUpdate(
                true,
                ActionConstants.DOUBLE_DOWN,
                playerHandBestMove
              )
            );
          } else {
            dispatch(
              postMoveUpdate(
                false,
                ActionConstants.DOUBLE_DOWN,
                playerHandBestMove
              )
            );
          }
          dispatch(updateUserBankroll(-pot));
          dispatch(doubleDown());
        }}
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
  const playerHandBestMove = useSelector(
    (state: State) => state.game.playerHandBestMove
  );
  const pot = useSelector((state: State) => state.game.pot);
  if (splitBoolean) {
    return (
      <button
        className="button split-button"
        onClick={() => {
          if (playerHandBestMove === ActionConstants.SPLIT) {
            dispatch(
              postMoveUpdate(true, ActionConstants.SPLIT, playerHandBestMove)
            );
          } else {
            dispatch(
              postMoveUpdate(false, ActionConstants.SPLIT, playerHandBestMove)
            );
          }
          dispatch(updateUserBankroll(-pot));
          dispatch(split());
          dispatch(postSplitUpdate());
        }}
      >
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
  const splitHandBestMove = useSelector(
    (state: State) => state.game.splitHandBestMove
  );
  if (splitHitBoolean) {
    return (
      <button
        className="button hit-button"
        onClick={() => {
          if (splitHandBestMove === ActionConstants.SPLIT_HIT) {
            dispatch(
              postMoveUpdate(true, ActionConstants.SPLIT_HIT, splitHandBestMove)
            );
          } else {
            dispatch(
              postMoveUpdate(
                false,
                ActionConstants.SPLIT_HIT,
                splitHandBestMove
              )
            );
          }
          dispatch(splitHit());
        }}
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
  const splitHandBestMove = useSelector(
    (state: State) => state.game.splitHandBestMove
  );
  if (splitStayBoolean) {
    return (
      <button
        className="button stay-button"
        onClick={() => {
          if (splitHandBestMove === ActionConstants.SPLIT_STAY) {
            dispatch(
              postMoveUpdate(
                true,
                ActionConstants.SPLIT_STAY,
                splitHandBestMove
              )
            );
          } else {
            dispatch(
              postMoveUpdate(
                false,
                ActionConstants.SPLIT_STAY,
                splitHandBestMove
              )
            );
          }
          dispatch(splitStay());
        }}
      >
        Stay
      </button>
    );
  } else {
    return <></>;
  }
};
