import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="main-header">BlackJack Practice</h1>
      </Link>
    </header>
  );
};

export default Header;