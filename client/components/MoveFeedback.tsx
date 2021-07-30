import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { ActionConstants } from "../redux/actionConstants";

const MoveFeedback: React.FC = () => {
  const lastMoveCorrect = useSelector(
    (state: State) => state.user.lastMoveCorrect
  );
  const correctLastMove = useSelector(
    (state: State) => state.user.correctLastMove
  );
  const lastMove = useSelector((state: State) => state.user.lastMove);
  const moveUpdated = useSelector((state: State) => state.user.moveUpdated);
  // TODO account for split hitting and split staying
  if (moveUpdated === true) {
    if (lastMoveCorrect === true) {
      return <>Good Job! You made the optimal move</>;
    } else {
      let lastMoveText: string;
      if (
        lastMove === ActionConstants.SPLIT_HIT ||
        lastMove === ActionConstants.SPLIT_STAY
      ) {
        lastMoveText =
          lastMove === ActionConstants.SPLIT_HIT ? "hit" : "stayed";
      } else if (lastMove === ActionConstants.SPLIT) {
        lastMoveText =
          lastMove === ActionConstants.SPLIT
            ? ActionConstants.SPLIT
            : lastMove + "ed";
      } else {
        lastMoveText =
          lastMove === ActionConstants.HIT
            ? ActionConstants.HIT
            : lastMove + "ed";
      }
      lastMoveText = lastMoveText.toLowerCase();
      let correctLastMoveText: string;
      correctLastMoveText =
        correctLastMove === ActionConstants.HIT
          ? ActionConstants.HIT
          : correctLastMove + "ed";
      correctLastMoveText = correctLastMoveText.toLowerCase();

      return (
        <>
          <p>{`You should have ${correctLastMoveText} instead of ${lastMoveText}`}</p>
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default MoveFeedback;
