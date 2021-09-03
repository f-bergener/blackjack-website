import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { State } from "../redux/store";

const MoveAccuracy: React.FC = () => {
  const user = useSelector((state: State) => state.user);
  const { correctMoves, totalMoves } = user;
  const moveAccuracy = Math.round((correctMoves / totalMoves) * 100);
  const moveInaccuracy = Math.round(100 - moveAccuracy);
  const data = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "# of Votes",
        data: [moveAccuracy, moveInaccuracy],
        backgroundColor: ["rgba(0, 204, 0, 0.5)", "rgba(255, 25, 64, 0.5)"],
        borderColor: ["rgba(0, 204, 0, 1)", "rgba(255, 25, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const options = { color: "white" };
  return (
    <div className="individual-graph-container">
      <h3>Move Accuracy % ({totalMoves} Moves)</h3>
      <Pie options={options} data={data} />
    </div>
  );
};

export default MoveAccuracy;
