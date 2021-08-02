import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "../redux/store";
import LogOut from "./LogOut";

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: State) => state.user.isLoggedIn);
  return (
    <header>
      <div>
        <Link to="/">
          <h1 id="main-header">Optimal BlackJack</h1>
        </Link>
      </div>
      <div className="link-container">
        <Link to="/profilepage">
          <h2>Profile</h2>
        </Link>
        <Link to="/strategytable">
          <h2>Strategy Table</h2>
        </Link>
        {isLoggedIn ? (
          <LogOut />
        ) : (
          <>
            <Link to="/login">
              <h2>Log In</h2>
            </Link>
            <Link to="/signup">
              <h2>Sign Up</h2>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
