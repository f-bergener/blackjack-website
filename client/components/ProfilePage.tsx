import React from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/store";
import MoveAccuracy from "./MoveAccuracy";
import WinningPercentage from "./WinningPercentage";

const ProfilePage: React.FC = () => {
  const user = useSelector((state: State) => state.user);
  const { bankroll, username } = user;
  return (
    <div className="container regular-page">
      <h2>{`${username}'s Stats`}</h2>
      <h3>{`Bankroll: $${bankroll.toLocaleString("en")}`}</h3>
      <div className="graph-container">
        <WinningPercentage />
        <MoveAccuracy />
      </div>
    </div>
  );
};

export default ProfilePage;
