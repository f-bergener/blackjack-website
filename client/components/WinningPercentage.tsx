import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { State } from "../redux/store";

const WinningPercentage: React.FC = () => {
  const user = useSelector((state: State) => state.user);
  const { handsWon, totalHands } = user;
  const winningPercentage = Math.round((handsWon / totalHands) * 100);
  const losingPercentage = Math.round(100 - winningPercentage);
  const data = {
    labels: ["Won", "Lost"],
    datasets: [
      {
        label: "# of Votes",
        data: [winningPercentage, losingPercentage],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h3>Hand Winning %</h3>
      <Pie data={data} />
    </div>
  );
};

export default WinningPercentage;
