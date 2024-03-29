import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { State } from "../redux/store";

const WinningPercentage: React.FC = () => {
  const user = useSelector((state: State) => state.user);
  const { handsWon, handsPushed, totalHands } = user;
  const winningPercentage = Math.round((handsWon / totalHands) * 100);
  const pushPercentage = Math.round((handsPushed / totalHands) * 100);
  const losingPercentage = Math.round(100 - winningPercentage - pushPercentage);
  console.log(winningPercentage, pushPercentage, losingPercentage);
  const data = {
    labels: ["Won", "Pushed", "Lost"],
    datasets: [
      {
        data: [winningPercentage, pushPercentage, losingPercentage],
        backgroundColor: [
          "rgba(0, 204, 0, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 25, 64, 0.5)",
        ],
        borderColor: [
          "rgba(0, 204, 0, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 25, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = { color: "white" };
  return (
    <div className="individual-graph-container">
      <h3>Hand Outcome % ({totalHands} Hands)</h3>
      <Pie options={options} data={data} />
    </div>
  );
};

export default WinningPercentage;
