import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import { ActionConstants } from "../redux/actionConstants";

const MoveFeedback: React.FC = () => {
  // Function for fixing move names that are capitalized
  const fixMoveText = (move: string) => {
    if (
      move === ActionConstants.SPLIT_HIT ||
      move === ActionConstants.SPLIT_STAY
    ) {
      return move === ActionConstants.SPLIT_HIT ? "hit" : "stayed";
    } else if (move === ActionConstants.SPLIT) {
      return ActionConstants.SPLIT.toLowerCase();
    } else if (move === ActionConstants.DOUBLE_DOWN) {
      return "doubled down";
    } else {
      return (
        move === ActionConstants.HIT ? ActionConstants.HIT : move + "ed"
      ).toLowerCase();
    }
  };
  const lastMoveCorrect = useSelector(
    (state: State) => state.user.lastMoveCorrect
  );
  const correctLastMove = useSelector(
    (state: State) => state.user.correctLastMove
  );
  const lastMove = useSelector((state: State) => state.user.lastMove);
  const moveUpdated = useSelector((state: State) => state.user.moveUpdated);
  if (moveUpdated === true) {
    if (lastMoveCorrect === true) {
      return <h2>Good Job! You made the optimal move</h2>;
    } else {
      const lastMoveText = fixMoveText(lastMove);
      const correctLastMoveText = fixMoveText(correctLastMove);
      return (
        <h2>{`You should have ${correctLastMoveText} instead of ${lastMoveText}`}</h2>
      );
    }
  } else {
    return <></>;
  }
};

export default MoveFeedback;
