import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Welcome</h1>
      <h2>Click the button below to start your game</h2>
      <Link to="/game">
        <button id="start-button">Start Game</button>
      </Link>
    </>
  );
};

export default Homepage;
