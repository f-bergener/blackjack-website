import React from "react";
import { Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { me } from "./redux/userReducer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Game from "./components/Game";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import history from "./history";
import { TOKEN } from "./redux/userReducer";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const token = window.localStorage.getItem(TOKEN);
  if (token.length) {
    dispatch(me());
  }
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path="/game" component={Game} />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
};

export default App;
