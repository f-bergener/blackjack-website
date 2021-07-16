import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="main-header">BlackJack Practice</h1>
      </Link>
      <Link to="/login">
        <h2>Log In</h2>
      </Link>
      <Link to="/signup">
        <h2>Sign Up</h2>
      </Link>
    </header>
  );
};

export default Header;
